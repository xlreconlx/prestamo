import { Component, OnInit } from '@angular/core';
import {Prestamo} from "./../clases/prestamos";
import {PRESTAMOS} from "./../providers/prestamos-dao";
import {FirebaseListObservable} from 'angularfire2/database';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
declare var $:any;
declare var Materialize:any;

@Component({
  selector: 'app-prestamos-page',
  templateUrl: './prestamos-page.component.html',
  styleUrls: ['./prestamos-page.component.css']
})
export class PrestamosPageComponent implements OnInit {
public prestamo: Prestamo = new Prestamo();
  public lstPrestamo: FirebaseListObservable<any>;
  public idClienteSelect:string;
    public idEmpleadoSelect:string;
     public idRutaSelect:string;
       public idTipoPrestamoSelect:number;

   constructor(public prestamos: PRESTAMOS, private router: Router,private route: ActivatedRoute,
    private location: Location) { 
      this.route.params.subscribe(params => {
      this.idClienteSelect = params['id']; 
      this.idEmpleadoSelect = params['id']; 
      this.idTipoPrestamoSelect = params['id'];
      this.idRutaSelect = params['id']
        });
      this.prestamos.listaPrestamos(this.idClienteSelect, this.idEmpleadoSelect,this.idTipoPrestamoSelect,this.idRutaSelect);
  }
 ngOnInit() {
  }

 adminPrestamo(ruta:string,uid: string){
  this.router.navigate([ruta+'/'+uid]);
}

addEmpresa(modal){
  this.prestamo.fechaRegistro = Date.now();
  this.prestamo.uidEmpleado=this.idEmpleadoSelect;
  this.prestamo.uidCliente=this.idClienteSelect;
  this.prestamo.idTipoPrestamo=this.idTipoPrestamoSelect;
  this.prestamo.uidRuta=this.idRutaSelect;
  this.prestamos.crearPrestamos(this.prestamo)
  .then(_ => {
    this.closeModal(modal);
    this.showToast("Se ha registrado");
    this.prestamo = new Prestamo();
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
