import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { DataService } from './_shared/data.service';
import { SubcategoriesComponent } from './subcategories/subcategories.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'app-root', component: AppComponent },
  { path: 'catagories/:branch', component: CatagoriesComponent },
  { path: 'subcatagories', component: SubcategoriesComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PagenotfoundComponent,
    CatagoriesComponent,
    SubcategoriesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
