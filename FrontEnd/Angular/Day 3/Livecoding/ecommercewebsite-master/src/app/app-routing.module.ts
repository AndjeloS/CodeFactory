import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'details/:index',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
