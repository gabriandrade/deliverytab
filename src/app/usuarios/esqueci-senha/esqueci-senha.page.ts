import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../shared/usuarios.service';
import { ToastService } from '../../core/shared/toast.service';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {
  formEsqueciSenha: FormGroup;
  
  constructor( private formBuilder: FormBuilder, private usuariosService: UsuariosService,
    private toast: ToastService) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get email() { return this.formEsqueciSenha.get('email'); }

  criarFormulario() {
    this.formEsqueciSenha = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.formEsqueciSenha.valid) {
      this.usuariosService.enviarEmailResetarSenha(this.formEsqueciSenha.value.email)
        .then(() => {
          this.toast.show('E-mail enviado com sucesso');
        })
        .catch((mensagem: string) => {
          this.toast.show(mensagem);
        });
    }
  }


}
