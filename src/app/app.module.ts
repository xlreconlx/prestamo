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
import {CAJA} from "./providers/caja-dao";
import {ABONOS} from "./providers/abonos-dao";
import {CIUDAD} from "./providers/ciudad-dao";
import {CLIENTE} from "./providers/cliente-dao";
import {GASTOS} from "./providers/gastos-dao";
import {PRESTAMOS} from "./providers/prestamos-dao";
import {RUTA} from "./providers/ruta-dao";

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ClientePageComponent } from './cliente-page/cliente-page.component';
import { CajaPageComponent } from './caja-page/caja-page.component';
import { CiudadPageComponent } from './ciudad-page/ciudad-page.component';
import { AbonosPageComponent } from './abonos-page/abonos-page.component';
import { PrestamosPageComponent } from './prestamos-page/prestamos-page.component';
import { RutaPageComponent } from './ruta-page/ruta-page.component';
import { GastosPageComponent } from './gastos-page/gastos-page.component';

const routes: Routes = [
 {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginPageComponent},
  { path: 'cliente', component: ClientePageComponent},
  { path: 'ciudad', component: CiudadPageComponent},
  { path: 'abonos', component: AbonosPageComponent},
  { path: 'caja', component: CajaPageComponent},
  { path: 'prestamos', component: PrestamosPageComponent},
  { path: 'gastos', component: GastosPageComponent},
  { path: 'ruta', component: RutaPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ClientePageComponent,
    CajaPageComponent,
    CiudadPageComponent,
    AbonosPageComponent,
    PrestamosPageComponent,
    RutaPageComponent,
    GastosPageComponent
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
  providers: [AF,CLIENTE, CAJA, ABONOS,CIUDAD, GASTOS, PRESTAMOS, RUTA],

  bootstrap: [AppComponent]
})
export class AppModule { }
