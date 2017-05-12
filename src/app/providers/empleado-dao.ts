import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@Injectable()
export class EMPLEADO {
  public lstEmpleado: FirebaseListObservable<any>;
  public uid:string;

  constructor(public af: AngularFireDatabase) {
  	 this.lstEmpleado = this.af.list('empleados/'+this.uid);
  }

crearEmpleado(empleado){
	return this.lstEmpleado.push(empleado);
}

eliminarEmpleado(uid:string){
	return this.lstEmpleado.remove('/'+uid);
}

actualizarEmpleado(empleado){
	return this.lstEmpleado.update('/'+empleado.uid, empleado);
}

}