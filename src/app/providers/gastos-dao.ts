import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@Injectable()
export class GASTOS {
  public lstGastos: FirebaseListObservable<any>;

  constructor(public af: AngularFireDatabase) {
  	 this.lstGastos = this.af.list('gasto');
  }

crearGastos(gastos){
	return this.lstGastos.push(gastos);
}

eliminarGastos(uid:string){
	return this.lstGastos.remove('/'+uid);
}

actualizarGastos(gastos){
	return this.lstGastos.update('/'+gastos.uid,gastos);
}

}