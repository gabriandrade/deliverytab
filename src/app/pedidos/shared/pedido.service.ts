import { FirebasePath } from './../../core/shared/firebase-path';
import { CarrinhoService } from './carrinho.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Key } from 'protractor';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  [x: string]: any;

  public static TIPO_FORMA_PAGAMENTO = {
    DINHEIRO: 1,
    CARTAO: 2
  };

  public static STATUS = {
    ENVIADO: 0,
    CONFIRMADO: 1,
    SAIU_PRA_ENTREGA: 2,
    ENTREGUE: 3
  };

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth,
              private carrinhoService: CarrinhoService,
              private dateFormat: DatePipe) { }

  gerarPedido(pedido: any) {
    return new Promise ( ( resolve, reject ) => {
      const subscribe = this.carrinhoService.getAll().subscribe(produtos => {
        subscribe.unsubscribe();

        const pedidoRef = this.criarObjetoPedido(pedido);
        const pedidoKey = this.db.createPushId();
        const pedidoPath = `${FirebasePath.PEDIDOS}${pedidoKey}`;

        let pedidoObj = {};
        pedidoObj[pedidoPath] = pedidoRef;

        produtos.forEach( (produto:any) => {
          const pedidoProdutoPath = `${FirebasePath.PEDIDOS_PRODUTOS}${pedidoKey}/${produto.produtoKey}`;
          pedidoObj[pedidoProdutoPath] = {
            produtoNome: produto.produtoNome,
            produtoDescricao: produto.Descricao,
            observacao: produto.observacao,
            produtoPreco: produto.produtoPreco,
            quantidade: produto.quantidade,
            total: produto.total
          };
        });

        this.db.object('/').update(pedidoObj)
         .then( () => {
           this.carrinhoService.clear()
            .then( () => resolve())
            .catch( () => reject());
         })
         .catch( () => reject());
      });
    });
  }

  private criarObjetoPedido(pedido: any) {
    const numeroPedido = '#' + this.dateFormat.transform(new Date(), 'ddMMyyyyHHmmss');
    const dataPedido = this.dateFormat.transform(new Date(), 'dd/mm/yyyy');
    let pedidoRef = {
      numero: numeroPedido,
      status: PedidoService.STATUS.ENVIADO,
      data: dataPedido,
      formPagament: pedido.formaPagamento,
      trocoPara: pedido.trocoPara,
      tipoCartao: pedido.tipoCartao,
      enderecoEntrega: pedido.enderecoEntrega,
      usuariokey: this.afAuth.auth.currentUser.uid,
      usuarioNome: this.afAuth.auth.currentUser.displayName,
      //Tecnica para filtro de varios campos
      usuarioStatus: this. afAuth.auth.currentUser.uid + '_' + PedidoService.STATUS.ENVIADO,
      total: pedido.total
    };
    return pedidoRef;
  }

  getEstatusNome(status: number) {
    switch (status) {
      case PedidoService.STATUS.ENVIADO:
        return `Aguardando confirmação`;
      case PedidoService.STATUS.CONFIRMADO:
        return `Em preparação`;
      case PedidoService.STATUS.SAIU_PRA_ENTREGA:
        return `Saiu pra entrega`;
      case PedidoService.STATUS.ENTREGUE:
        return `Entregue`;
    }
  }

  getFormaPagamentoNome(paymentType: number) {
    switch (paymentType) {
      case PedidoService.TIPO_FORMA_PAGAMENTO.DINHEIRO:
        return `Dinheiro`;
      case PedidoService.TIPO_FORMA_PAGAMENTO.CARTAO:
        return `Carão de crédito/débito`;
    }
  }

  getAll() {
    return this.db.list(FirebasePath.PEDIDOS,
      q => q.orderByChild('usuariokey').endAt(this.afAuth.auth.currentUser.uid))
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(m => ({ Key: m.payload.key, ...m.payload.val() }));
        })
      );
  }

  getAllAbertos() {
    const usuarioStatus = this.afAuth.auth.currentUser.uid + '_' + PedidoService.STATUS.SAIU_PRA_ENTREGA;
    return this.db.list(FirebasePath.PEDIDOS,
      q => q.orderByChild('UsuarioStatus').endAt(usuarioStatus))
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
        })
      );
  }

  getAllProdutos(key: string) {
    const path = `${FirebasePath.PEDIDOS_PRODUTOS}${Key}`;
    return this.db.list(path).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  clear() {
    return this.getCarrinhoProdutoRef().remove();
  }
}
