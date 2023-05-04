import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorComponent } from './pages/selectorPage/selector.component';
import { HomePageComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    // En caso necesites un home como en heroes spa
    // component: HomePageComponent,
    children: [
      {
        path: 'selector',
        component: SelectorComponent
      },
      {
        path:'**',
        redirectTo: 'selector'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports:[
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class PaisesRoutingModule {}