import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListaProdutosPage } from './lista-produtos.page';
import { SharedModule } from '../../core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutosPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaProdutosPage]
})
export class ListaProdutosPageModule {}
