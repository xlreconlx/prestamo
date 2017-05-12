import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@Injectable()
export class EMPRESA {
  public lstEmpresas: FirebaseListObservable<any>;

  constructor(public af: AngularFireDatabase) {
  	 this.lstEmpresas = this.af.list('empresas');
  }

crearEmpresa(empresa){
	return this.lstEmpresas.push(empresa);
}

eliminarEmpresa(uid:string){
	return this.lstEmpresas.remove('/'+uid);
}

actualizarEmpresa(empresa){
	return this.lstEmpresas.update('/'+empresa.uid,empresa);
}

}