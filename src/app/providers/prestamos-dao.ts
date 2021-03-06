import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@Injectable()
export class PRESTAMOS {
  public lstPrestamos: FirebaseListObservable<any>;

  constructor(public af: AngularFireDatabase) {
  }

  listaPrestamos(uidCliente,uidEmpleado,uidTipoPrestamo,uidRuta){
	this.lstPrestamos = this.af.list('prestamos/'+uidCliente + uidEmpleado + uidRuta);
}


crearPrestamos(prestamo){
	return this.lstPrestamos.push(prestamo);
}

eliminarPrestamos(uid:string){
	return this.lstPrestamos.remove('/'+uid);
}

actualizarPrestamos(prestamo){
	return this.lstPrestamos.update('/'+prestamo.uid,prestamo);
}

}