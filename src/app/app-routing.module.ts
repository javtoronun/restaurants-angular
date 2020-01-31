import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateRestaurantComponent} from './create-restaurant/create-restaurant.component';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import {CanNavigateGuard} from './can-navigate.guard';

const routes: Routes = [
  { path: 'restaurants/new', canActivate: [CanNavigateGuard], component: CreateRestaurantComponent },
  { path: 'restaurants/:id', component: RestaurantDetailComponent },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
