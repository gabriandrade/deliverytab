import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebasePath } from 'src/app/core/shared/firebase-path';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private db:AngularFireDatabase, private afAuth: AngularFireAuth) {}

  getCarrinhoProdutoRef() {
    const path = `${FirebasePath.CARRINHO}${this.afAuth.auth.currentUser.uid}/${FirebasePath.PRODUTOS}`;
    return this.db.list(path);
  }

  insert(itemProduto: any) {
    return this.getCarrinhoProdutoRef().push(itemProduto);
  }

  carrinhoPossuiItens() {
    return this.getCarrinhoProdutoRef().snapshotChanges().pipe(
      map(changes => {
        return changes.length > 0;
      })
    );
  }

  calcularTotal(preco: number, quantidade: number) {
    return preco * quantidade
  }

  update(key: string, quantidade: number, total: number) {
    return this.getCarrinhoProdutoRef().update(key, {quantidade: quantidade, total: total});
  }

  remove(key: string) {
    return this.getCarrinhoProdutoRef().remove(key);
  }

  getAll() {
    return this.getCarrinhoProdutoRef().snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload, ...m.payload.val() }) );
      })
    );
  }

  getTotalPdido() {
    return this.getCarrinhoProdutoRef().snapshotChanges().pipe(
      map(changes => {
        return changes.map( (m: any) => (m.payload.val().total)).reduce( (prev: number, current: number) => {
          return prev + current;
        });
      })
    );
  }

  clear() {
    return this.getCarrinhoProdutoRef().remove();
  }
}
