import { NgModule } from '@angular/core';
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
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormPagamentoPage]
})
export class FormPagamentoPageModule {}
