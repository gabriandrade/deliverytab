import { UsuariosService } from './../../usuarios/shared/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from './../../core/shared/toast.service';

@ Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    private router: Router,
    private toast: ToastService) { }

  ngOnInit() {
    this .criarFormulario();
  }

  get email() { return this .formLogin.get('email'); }
  get senha() { return this .formLogin.get('senha'); }

  criarFormulario() {
    this .formLogin = this .formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this .formLogin.valid) {
      this .usuarioService.login(this .formLogin.value.email, this .formLogin.value.senha)
        .then(() => {
          this .router.navigate(['/']);
        })
        .catch((mensagem: string) => {
          this .toast.show(mensagem);
        });
    }
  }


}
