import { Component, OnInit } from '@angular/core';
import {Empresa} from "./../clases/empresa";
import {FirebaseListObservable} from 'angularfire2/database';
import {Router} from "@angular/router";
import {EMPRESA} from "./../providers/empresa-dao";
declare var $:any;
declare var Materialize:any;
@Component({
  selector: 'app-empresa-page',
  templateUrl: './empresa-page.component.html',
  styleUrls: ['./empresa-page.component.css']
})
export class EmpresaPageComponent implements OnInit {
  public empresa: Empresa = new Empresa();
  public lstEmpresas: FirebaseListObservable<any>;

  constructor(private router: Router
  	,public afEmpresa: EMPRESA) {
  	/**
  	*recuperamos el listado de empresas registradas
  	*/
    this.lstEmpresas = this.afEmpresa.lstEmpresas;
  	 }

  ngOnInit() {
  }

 adminEmpresa(uid: string){
  this.router.navigate(['empleados/'+uid]);
}

addEmpresa(modal){
  this.empresa.img = "";
  this.empresa.registro = Date.now();
  this.afEmpresa.crearEmpresa(this.empresa)
  .then(_ => {
    this.closeModal(modal);
    this.showToast("Se ha registrado");
    this.empresa = new Empresa();
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
