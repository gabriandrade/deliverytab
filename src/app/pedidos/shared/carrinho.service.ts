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
}
