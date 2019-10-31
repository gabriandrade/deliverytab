import { AlertService } from './../../core/shared/alert.service';
import { CarrinhoService } from './../shared/carrinho.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-item-pedido',
  templateUrl: './lista-item-pedido.page.html',
  styleUrls: ['./lista-item-pedido.page.scss'],
})
export class ListaItemPedidoPage implements OnInit {
itensPedido: Observable<any[]>;
total: number;

  constructor(private carrinhoService: CarrinhoService, private alert: AlertService) { }

  ngOnInit() {
    this.itensPedido = this.carrinhoService.getAll();
    this.getTotalPedido();
  }

  getTotalPedido() {
    const subscribe = this.carrinhoService.getTotalPedido().subscribe( (total: number) => {
      subscribe.unsubscribe();
      this.total = total;
    })
  }

  adicionarQuantidade(itemPedido: any){
    let qtd = itemPedido.quantidade;
    qtd++;

    this.atualizarTotal(itemPedido, qtd);
  }

  removerQuantidade(itemPedido: any) {
    let qtd = itemPedido.quantidade;
    qtd--;

    if (qtd <=0){
      this.removerProduto(itemPedido);
    } else {
      this.atualizarTotal(itemPedido, qtd);
    }
  }

  atualizarTotal(itemPedido: any, quantidade: number){
    const total = this.carrinhoService.calcularTotal(itemPedido.produtoPreco, quantidade);
    this.carrinhoService.update(itemPedido.key, quantidade, total);
    this.getTotalPedido();
  }

  removerProduto(itemPedido: any){
    this.alert.ShowConfirmaExclusao(itemPedido.produtoNome, () =>{
      this.carrinhoService.remove(itemPedido.key);
      this.getTotalPedido();
    })

  }

}
