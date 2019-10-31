import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators';
import { ToastService } from '../core/shared/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private afAuth: AngularFireAuth, private toast: ToastService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.afAuth.user.pipe(
      take(1),
      map(user => !!user),
      tap(usuarioLogado => {
        if (!usuarioLogado) {
          this.toast.show('É necessário efetuar Login primeiro ou Criar uma Conta');
          this.router.navigate(['/login']);
        }
      })
    )
  }

}
