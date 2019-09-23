import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios/shared/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private usuariosService: UsuariosService,
              private router: Router) {}

  sair(){
    this.usuariosService.logout()
    .then( () => {
      this.router.navigate(['/login']);
    })
  }

}
