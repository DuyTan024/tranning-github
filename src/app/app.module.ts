import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InformComponent } from './inform/inform.component';
import { Route } from '@angular/compiler/src/core';


const routes:Routes=[
{
path:'login',
component:LoginComponent
},
{
  path:'inform',
  component:InformComponent
},

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InformComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
