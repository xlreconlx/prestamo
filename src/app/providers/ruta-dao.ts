import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@Injectable()
export class RUTA {
  public lstRuta: FirebaseListObservable<any>;

  constructor(public af: AngularFireDatabase) {
  	 this.lstRuta = this.af.list('rutas');
  }

crearRuta(ruta){
	return this.lstRuta.push(ruta);
}

eliminarRuta(uid:string){
	return this.lstRuta.remove('/'+uid);
}

actualizarRuta(ruta){
	return this.lstRuta.update('/'+ruta.uid,ruta);
}

}