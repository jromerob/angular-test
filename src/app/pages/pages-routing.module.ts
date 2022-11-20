import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }),
  ],
  exports: [
    RouterModule
  ]
})

export class PagesRoutingModule {}
