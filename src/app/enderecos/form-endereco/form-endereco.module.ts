import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormEnderecoPage } from './form-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: FormEnderecoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormEnderecoPage]
})
export class FormEnderecoPageModule {}
