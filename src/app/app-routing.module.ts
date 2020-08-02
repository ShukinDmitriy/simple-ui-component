import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './pages/button/button.component';
import { SelectComponent } from './pages/select/select.component';

const routes: Routes = [
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'select',
    component: SelectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
