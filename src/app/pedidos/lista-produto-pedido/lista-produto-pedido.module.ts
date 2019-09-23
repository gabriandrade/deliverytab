import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaProdutoPedidoPage } from './lista-produto-pedido.page';

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
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaProdutoPedidoPage]
})
export class ListaProdutoPedidoPageModule {}
