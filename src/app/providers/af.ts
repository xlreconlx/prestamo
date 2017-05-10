import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import { AngularFireAuth  } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@Injectable()
export class AF {
  public displayName: string;
  public email: string;
  public user: FirebaseObjectObservable<any>;
  public user1: Observable<firebase.User>;
  public uid: string;
  public isLogin: boolean;

  constructor(public afAuth: AngularFireAuth ) {
    this.user1 = afAuth.authState;  
  }
 
 login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

loginWithEmail(email,password){
 return this.afAuth.auth.signInWithEmailAndPassword(email,password);
}

  logout() {
    this.afAuth.auth.signOut();
  }

}