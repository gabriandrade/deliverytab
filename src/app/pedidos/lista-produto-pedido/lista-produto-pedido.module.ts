import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListaProdutoPedidoPage } from './lista-produto-pedido.page';
import { SharedModule } from 'src/app/core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutoPedidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaProdutoPedidoPage]
})
export class ListaProdutoPedidoPageModule {}
