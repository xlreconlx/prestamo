import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@Injectable()
export class PRESTAMOS {
  public lstPrestamos: FirebaseListObservable<any>;

  constructor(public af: AngularFireDatabase) {
  	 this.lstPrestamos = this.af.list('prestamo');
  }

crearPrestamos(prestamos){
	return this.lstPrestamos.push(prestamos);
}

eliminarPrestamos(uid:string){
	return this.lstPrestamos.remove('/'+uid);
}

actualizarPrestamos(prestamos){
	return this.lstPrestamos.update('/'+prestamos.uid,prestamos);
}

}