import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ValorComponent } from '../valor/valor.component';

@NgModule({
  declarations: [ValorComponent],
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
    ReactiveFormsModule,
    ValorComponent
  ],
  entryComponents:[ValorComponent]
})
export class SharedModule { }
