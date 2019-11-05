import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared/shared/shared.module';

import { FormPagamentoPage } from './form-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: FormPagamentoPage
  }
];

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormPagamentoPage]
})
export class FormPagamentoPageModule {}
