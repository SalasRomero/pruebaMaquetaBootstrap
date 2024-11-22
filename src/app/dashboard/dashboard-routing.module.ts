import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './inicio/inicio.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
          {
            path:'inicio',
            component:InicioComponent
          },
          {
            path:'data',
            component:DataComponent
          },
          {
            path:'',
            pathMatch:'full',
            redirectTo:'inicio'
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
