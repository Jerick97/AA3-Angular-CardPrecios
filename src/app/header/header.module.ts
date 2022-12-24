import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent //Exportamos el Componente del NAV
  ]
})
export class HeaderModule { }
