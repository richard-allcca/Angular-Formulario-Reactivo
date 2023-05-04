import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './pages/selectorPage/selector.component';
import { PaisesRoutingModule } from './paises.routing.module';
import { HomePageComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    SelectorComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
