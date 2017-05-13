import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@Injectable()
export class GASTOS {
  public lstGastos: FirebaseListObservable<any>;

  constructor(public af: AngularFireDatabase) {
 
  }

  listaGastos(uidEmpleado){
	this.lstGastos = this.af.list('gastos/'+uidEmpleado);
}

crearGastos(gasto){
	return this.lstGastos.push(gasto);
}

eliminarGastos(uid:string){
	return this.lstGastos.remove('/'+uid);
}

actualizarGastos(gasto){
	return this.lstGastos.update('/'+gasto.uid,gasto);
}

}