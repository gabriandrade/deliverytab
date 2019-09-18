import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@ NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
