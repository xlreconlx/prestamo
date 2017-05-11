import { Component, OnInit } from '@angular/core';
import {CAJA} from "./../providers/caja-dao";
import {Router} from "@angular/router";
import {Caja} from "./../clases/caja";
import {FirebaseListObservable} from 'angularfire2/database';
declare var $:any;
declare var Materialize:any;

@Component({
  selector: 'app-caja-page',
  templateUrl: './caja-page.component.html',
  styleUrls: ['./caja-page.component.css']
})
export class CajaPageComponent implements OnInit {
	public caja:Caja = new Caja();
public lstCaja: FirebaseListObservable<any>;

  constructor(public cajaa:CAJA , private router:Router) { 
  	this.lstCaja= this.cajaa.lstCaja;
  }

  ngOnInit() {
  }



crearCaja(modal){
  this.caja.fechaRegistro = Date.now();
  this.cajaa.crearCaja(this.caja)

  .then(_ => {
    this.closeModal(modal);
    this.showToast("Se ha registrado");
    this.caja = new Caja();
  })
  .catch(err => this.showToast("Ocurrio un error"));
 }

eliminarCaja(uid){
this.cajaa.eliminarCaja(uid).then(_ => {
    this.showToast("Se ha eliminado");
  })
  .catch(err => this.showToast("Ocurrio un error"));
}

showModal(modal){
       $('#'+modal).modal().modal('open');
     }

closeModal(modal){
    $('#'+modal).modal().modal('close');
}

showToast(texto){
    Materialize.toast(texto, 5000);
}

}