import { Component, OnInit } from '@angular/core';
import { Http, Response,Headers, RequestOptions }    from '@angular/http';
import {Empleado} from "./../clases/empleado";
import {EMPLEADO} from "./../providers/empleado-dao";
import {FirebaseListObservable} from 'angularfire2/database';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
declare var $:any;
declare var Materialize:any;

@Component({
  selector: 'app-empleado-page',
  templateUrl: './empleado-page.component.html',
  styleUrls: ['./empleado-page.component.css']
})
export class EmpleadoPageComponent implements OnInit {
 public uid:string;
 public empleado: Empleado = new Empleado();
 /** info es una variable para crear nuestro empleado con usuario y contraseña */
 private info = {email:'',password:''};
 public  lstEmpleado: FirebaseListObservable<any>;
 private urlEmpleado = 'https://warsoft-code.herokuapp.com/createUser';  // URL to web API

  constructor(private http: Http,private route: ActivatedRoute,
    private location: Location,public afEmpleado: EMPLEADO) { 
  		this.route.params.subscribe(params => {
          this.uid = params['id']; 
        });
          this.afEmpleado.listaEmpleados(this.uid);
  }

  ngOnInit() {
    this.lstEmpleado = this.afEmpleado.lstEmpleado;
  }

/** creamos el usuario y contraseña del empleado
* esto nos retorna el id con el que se creo para poder guardarlo
*/
creaContrasenaEmpleado(idmodal:string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var uidEmpleado ="";
   this.info.email = this.empleado.correo;
   this.info.password = this.empleado.password;
   this.http.post(this.urlEmpleado, this.info, options).subscribe(data => {
          uidEmpleado = data.json();
          console.log(uidEmpleado);
          this.creaEmpleado(uidEmpleado,idmodal);
      }, error => {
      	  this.showToast("Ocurrio un error");
          console.log(error.json());
      });
                   
}

/**creamos el empleado en la base de datos
*/
creaEmpleado(uidEmpleado:string,idmodal:string){
   this.empleado.fecha = Date.now();
   this.empleado.uidEmpresa= this.uid;
   this.empleado.uid= uidEmpleado;
   this.empleado.rol = 1;
   this.empleado.password = "";

   this.afEmpleado.crearEmpleado(this.empleado)
   .then(_ => {
    this.closeModal(idmodal);
    this.showToast("Se ha registrado");
    this.empleado = new Empleado();
  })
  .catch(err => this.showToast("Ocurrio un error"));
}

 private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
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
