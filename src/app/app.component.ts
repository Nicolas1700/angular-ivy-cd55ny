import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  registro = {
    name: '',
    email: '',
    password: ''
  }
  login = {
    email: '',
    password: ''
  }

  btnRegistro = true;
  btnLogin = true;

  registrarPersona(){
    console.log(this.registro);
  }

  loginUser(){
    console.log(this.login);
  }

  menuRegistro(){
    this.btnLogin = true;
    return this.btnRegistro = false;
  }

  menuLogin(){
    this.btnRegistro = true;
    return this.btnLogin = false;
  }
}
