import { Component, OnInit } from '@angular/core';
import {GASTOS} from "./../providers/gastos-dao";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import {Gasto} from "./../clases/gastos";
import {FirebaseListObservable} from 'angularfire2/database';
declare var $:any;
declare var Materialize:any;

@Component({
  selector: 'app-gastos-page',
  templateUrl: './gastos-page.component.html',
  styleUrls: ['./gastos-page.component.css']
})
export class GastosPageComponent implements OnInit {
	public gastos:Gasto = new Gasto();
public lstGasto: FirebaseListObservable<any>;
public uid:string;
 public idEmpleadoSelect:string;

  constructor(public gasto: GASTOS, private router: Router,private route: ActivatedRoute,
    private location: Location) { 
      this.route.params.subscribe(params => {
          this.uid = params['id']; 
        });
      this.gasto.listaGastos(this.uid);

  }

  ngOnInit() {
  }

crearGasto(modal){
  this.gastos.fechaRegistro = Date.now();
   this.gastos.uidEmpleado=this.idEmpleadoSelect;
  this.gasto.crearGastos(this.gasto)
  .then(_ => {
    this.closeModal(modal);
    this.showToast("Se ha registrado");
    this.gastos = new Gasto();
  })
  .catch(err => this.showToast("Ocurrio un error"));
 }

eliminarGasto(uid){
this.gasto.eliminarGastos(uid).then(_ => {
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