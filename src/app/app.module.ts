import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RestaurantService} from './restaurant.service';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';
import { NeighborhoodCodePipe } from './neighborhood-code.pipe';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogInfoRestaurantComponent } from './dialog-info-restaurant/dialog-info-restaurant.component';
import { MatCardModule } from '@angular/material/card';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'restaurant/new', component: CreateRestaurantComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    NeighborhoodCodePipe,
    JwPaginationComponent,
    DialogInfoRestaurantComponent,
    RestaurantListComponent,
    PageNotFoundComponent,
    CreateRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHx9VC82bWehXSIMIgHEWKcEGqnZFBOyA'
    }),
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [DialogInfoRestaurantComponent],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
