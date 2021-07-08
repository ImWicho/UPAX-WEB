import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'inicio', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
      { path: 'empleados', loadChildren: () => import('./pages/employees/employees.module').then((m) => m.EmployeesModule) },
      { path: 'grupos', loadChildren: () => import('./pages/groups/groups.module').then((m) => m.GroupsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
