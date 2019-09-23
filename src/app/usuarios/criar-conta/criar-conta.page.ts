import { UsuariosService } from './../shared/usuarios.service';
import { ToastService } from './../../core/shared/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {
formCriarConta: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toast: ToastService,
              private router: Router,
              private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get nome() { return this.formCriarConta.get('nome'); }
  get email() { return this.formCriarConta.get('email'); }
  get senha() { return this.formCriarConta.get('senha'); }

  criarFormulario() {
    this.formCriarConta = this.formBuilder.group({
      nome: ['', [Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }  

  onSubmit(){
    if (this.formCriarConta.valid) {
      this.usuariosService.criarConta(this.formCriarConta.value)
        .then(() => {
          this.toast.show('Sua conta foi criada com sucesso. Verifique seu Email!');
          this.router.navigate(['/']);
        })
        .catch(mensagem => {
          this.toast.show(mensagem);
        });
    }    
  }

}
