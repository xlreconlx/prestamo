import { Component, OnInit } from '@angular/core';
import {CLIENTE} from "./../providers/cliente-dao";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import {Cliente} from "./../clases/cliente";
import {FirebaseListObservable} from 'angularfire2/database';
declare var $:any;
declare var Materialize:any;

@Component({
  selector: 'app-cliente-page',
  templateUrl: './cliente-page.component.html',
  styleUrls: ['./cliente-page.component.css']
})
export class ClientePageComponent implements OnInit {
public cliente:Cliente = new Cliente();
public lstClientes: FirebaseListObservable<any>;
public uid:string;

  constructor(public clientes: CLIENTE, private router: Router,private route: ActivatedRoute,
    private location: Location) { 
      this.route.params.subscribe(params => {
          this.uid = params['id']; 
        });
      this.clientes.listaClientes(this.uid);
  }

  ngOnInit() {
      this.lstClientes = this.clientes.lstClientes;
  }

crearCliente(modal){
  this.cliente.fechaRegistro = Date.now();
  this.clientes.crearCliente(this.cliente)
  .then(_ => {
    this.closeModal(modal);
    this.showToast("Se ha registrado");
    this.cliente = new Cliente();
  })
  .catch(err => this.showToast("Ocurrio un error"));
 }

eliminarCliente(uid){
this.clientes.eliminarCliente(uid).then(_ => {
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
