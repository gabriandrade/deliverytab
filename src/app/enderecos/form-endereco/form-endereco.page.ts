import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../shared/endereco.service';
import { ToastService } from 'src/app/core/shared/toast.service';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.page.html',
  styleUrls: ['./form-endereco.page.scss'],
})
export class FormEnderecoPage implements OnInit {
  formEndereco: FormGroup;
  key: string;

  constructor(private enderecoService: EnderecoService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private toast: ToastService) { }

  ngOnInit() {
    this.criarFormulario();
    let key = this.route.snapshot.paramMap.get('key');
    if (key) {
      const subscribe = this.enderecoService.getByKey(key).subscribe( (endereco: any) => {
        subscribe.unsubscribe();
        this.key = endereco.key;
        this.formEndereco.patchValue({
          cep: endereco.cep,
          logradouro: endereco.logradouro,
          numero: endereco.numero,
          complemento: endereco.complemento,
          bairro: endereco.bairro
        })
      })
    }
  }

  criarFormulario(){
    this.key = null;
    this.formEndereco = this.formBuilder.group({
      cep: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
      bairro: ['']
    });
  }

  onSubmit(){
    if (this.formEndereco.valid){
      let result : Promise<{}>;
      if (this.key){
        result = this.enderecoService.update(this.formEndereco.value, this.key);
      } else {
        result = this.enderecoService.insert(this.formEndereco.value);
      }

      result
        .then( () => {
          this.toast.show('Endereço salvo com sucesso');
          if(!this.key){
            this.criarFormulario();
          }
        })
        .catch( () => {
          this.toast.show('Erro ao salvar o endereço');
        })
    }
  }

}
