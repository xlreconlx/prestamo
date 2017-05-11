import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import {RouterModule, Routes} from "@angular/router";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AF} from "./providers/af";
import {CLIENTE} from "./providers/cliente-dao";

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ClientePageComponent } from './cliente-page/cliente-page.component';

const routes: Routes = [
 {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginPageComponent},
  { path: 'cliente', component: ClientePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ClientePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AF,CLIENTE],
  bootstrap: [AppComponent]
})
export class AppModule { }
