import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavLoggedinComponent } from './components/nav-loggedin/nav-loggedin.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogSignComponent } from './components/log-sign/log-sign.component';
import { BookshownComponent } from './components/bookshown/bookshown.component';

//routes
const routes: Routes = [
{ path: 'home', component: HomeComponent },
  { path: 'sign', component: LogSignComponent },
  { path: 'book', component: BookshownComponent },
  { path: 'user', component: UserDashComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavLoggedinComponent,
    UserDashComponent,
    FooterComponent,
    LogSignComponent,
    BookshownComponent
  ],
  imports: [
  RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' }),
    BrowserModule,
  ],
   exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
