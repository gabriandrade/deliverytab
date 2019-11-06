import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../shared/pedido.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.page.html',
  styleUrls: ['./lista-pedido.page.scss'],
})
export class ListaPedidoPage implements OnInit {
  pedidos: Observable<any[]>

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidos = this.pedidoService.getAllAbertos();
  }

  getStatusNome(status: number) {
    return this.pedidoService.getStatusNome(status);
  }

  getFormaPagamentoNome(formaPagamento: number) {
    return this.pedidoService.getFormaPagamentoNome(formaPagamento);
  }

  executarBusca($event: any) {
    if ($event.target.checked) {
      this.pedidos = this.pedidoService.getAll();
    } else {
      this.pedidos = this.pedidoService.getAllAbertos();
    }
  }

}
