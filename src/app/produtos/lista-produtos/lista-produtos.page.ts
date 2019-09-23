import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../shared/produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage implements OnInit {
  produtos: Observable<any[]>;
  categorias: Observable<any[]>;
  categoriaSelecionada: string;

  constructor(private router: Router,
              private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtos = this.produtosService.getAll(null);
    this.categorias = this.produtosService.getCategoriasAll();
  }

  buscarProdutos(){
    this.produtos = this.produtosService.getAll(this.categoriaSelecionada);
  }

  adicionarProduto(produtoKey: string){
    this.router.navigate(['pedido/carrinho/novo-item/', produtoKey]);
  }

}
