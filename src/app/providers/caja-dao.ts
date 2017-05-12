import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@Injectable()
export class CAJA {
  public lstCaja: FirebaseListObservable<any>;

  constructor(public af: AngularFireDatabase) {

  }

  listaCaja(uid){
	this.lstCaja = this.af.list('cajas/'+uid);
}

crearCaja(caja){
	return this.lstCaja.push(caja);
}

eliminarCaja(uid:string){
	return this.lstCaja.remove('/'+uid);
}

actualizarCaja(caja){
	return this.lstCaja.update('/'+caja.uid,caja);
}

}