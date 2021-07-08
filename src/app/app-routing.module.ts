import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'app', loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: '', redirectTo: 'app/inicio', pathMatch: 'full'
  },
  { path: '**', redirectTo: 'app/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
