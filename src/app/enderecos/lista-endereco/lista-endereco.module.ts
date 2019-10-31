import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListaEnderecoPage } from './lista-endereco.page';
import { SharedModule } from 'src/app/core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListaEnderecoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaEnderecoPage]
})
export class ListaEnderecoPageModule {}
