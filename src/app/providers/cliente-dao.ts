import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@Injectable()
export class CLIENTE {
  public lstClientes: FirebaseListObservable<any>;

  constructor(public af: AngularFireDatabase) {
  	 this.lstClientes = this.af.list('clientes');
  }

crearCliente(cliente){
	return this.lstClientes.push(cliente);
}

eliminarCliente(uid:string){
	return this.lstClientes.remove('/'+uid);
}

actualizarCliente(cliente){
	return this.lstClientes.update('/'+cliente.uid,cliente);
}

}