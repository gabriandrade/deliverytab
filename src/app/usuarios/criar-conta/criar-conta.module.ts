import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../core/shared/shared/shared.module';


import { CriarContaPage } from './criar-conta.page';

const routes: Routes = [
  {
    path: '',
    component: CriarContaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CriarContaPage]
})
export class CriarContaPageModule {}
