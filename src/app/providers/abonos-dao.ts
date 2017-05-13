import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@Injectable()
export class ABONOS {
  public lstAbonos: FirebaseListObservable<any>;

  constructor(public af: AngularFireDatabase) {
  
  }

     listaGastos(uidPrestamo,uidEmpleado){
	 this.lstAbonos = this.af.list('abonos/'+uidPrestamo + uidEmpleado);
	}

crearAbonos(abono){
	return this.lstAbonos.push(abono);
}

eliminarAbonos(uid:string){
	return this.lstAbonos.remove('/'+uid);
}

actualizarAbonos(abono){
	return this.lstAbonos.update('/'+abono.uid,abono);
}

}