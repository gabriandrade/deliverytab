import { map } from 'rxjs/operators';
import { FirebasePath } from './../../core/shared/firebase-path';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) { }

  getEnderecoPath() {
    const path = `${FirebasePath.CLIENTES_ENDERECOS}${this.afAuth.auth.currentUser.uid}`
    return path;
  }

  getEnderecoRef() {
    const path = this.getEnderecoPath();
    return this.db.list(path);
  }

  getALL() {
    return this.getEnderecoRef().snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val()}) );
      })
    );
  }

  getByKey(key: string) {
    const path = `${this.getEnderecoPath()}/${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val()} );
      })
    );
  }

  insert(endereco: any) {
    return this.save(endereco, null);
  }

  update(endereco: any, key: string) {
    return this.save(endereco, key);
  }

  private save(endereco: any, key: string) {
    return new Promise( (resolve, reject) => {
      const enderecoRef = this.getEnderecoRef();
      if (key) {
      enderecoRef.update(key, endereco)
      .then( () => resolve(key))
      .catch( () => reject());
    } else {
      enderecoRef.push(endereco)
      .then( (result: any) => resolve(result.key) );
    }
  });
}

  remove(key: string) {
    return this.getEnderecoRef().remove(key);
  }
}
