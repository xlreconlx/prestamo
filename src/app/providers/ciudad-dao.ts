import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@Injectable()
export class CIUDAD {
  public lstCiudad: FirebaseListObservable<any>;

  constructor(public af: AngularFireDatabase) {
  	 this.lstCiudad = this.af.list('ciudads');
  }

crearCliente(ciudad){
	return this.lstCiudad.push(ciudad);
}

eliminarCliente(uid:string){
	return this.lstCiudad.remove('/'+uid);
}

actualizarCliente(ciudad){
	return this.lstCiudad.update('/'+ciudad.uid,ciudad);
}

}