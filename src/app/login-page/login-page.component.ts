import { Component, OnInit } from '@angular/core';
import {AF} from "./../providers/af";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public error: any;
  constructor(public afService: AF, private router: Router) { }

  ngOnInit() {
  }

  loginWithEmail(event, email, password){
    event.preventDefault();
    this.afService.loginWithEmail(email, password).then(() => {
      this.router.navigate(['empresa']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          if(this.error.code === 'auth/wrong-password'){
           this.error = "Usuario o Contraseña incorrectas";
          }else if(this.error.code === 'auth/user-not-found'){
          	this.error = "Usuario no existe.";
          }
          console.log(this.error);
        }
      });
  }

}
