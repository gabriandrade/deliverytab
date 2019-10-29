import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { FormPagamentoPage } from './form-pagamento.page';
import { SharedModule } from 'src/app/core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FormPagamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormPagamentoPage]
})
export class FormPagamentoPageModule {}
