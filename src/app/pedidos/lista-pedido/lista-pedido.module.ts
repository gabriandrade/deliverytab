import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared/shared/shared.module';

import { ListaPedidoPage } from './lista-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPedidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaPedidoPage]
})
export class ListaPedidoPageModule {}
