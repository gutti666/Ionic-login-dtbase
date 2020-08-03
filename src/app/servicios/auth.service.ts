import { user } from './../Pages/carga1/carga1.page';
import { firestore, auth } from 'firebase';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'url';
import { MenuController } from '@ionic/angular';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  D: boolean;
  cor:string;


  constructor(private Afauth: AngularFireAuth,
              private router: Router, public db: AngularFirestore, private menuController: MenuController) { }
  login(email:string , password:string){

    return new Promise (( resolve , rejected) =>
    {
      this.Afauth.signInWithEmailAndPassword(email, password).then( user => {
      this.cor = user.user.email;
      this.router.navigate(["/carga1", this.cor]);
      }).catch(err => rejected(err));
    });
  }

  logout(){
    this.Afauth.signOut().then(() =>
    {
      this.menuController.enable(true,'Nombre');
      this.router.navigate(['/menu/Inicio']);

    });
  }
 
  current(){ 
    
     return this.cor;
  }
  

  RegistrarUser(email: string , Password:string,documento:string, Tipo:number,Nombre:string){
    return new Promise (( resolve , rejected) =>
    {
      if(Tipo == 2){
        this.Afauth.createUserWithEmailAndPassword(email,Password).then(res =>{
          this.db.collection("Estudiantes").doc(documento).set({
          Correo: email,
          Documento:documento,
          Nombre:Nombre,
          Tipo:Tipo,
          });
          this.db.collection("Usuarios").doc(email).set({
          Correo: email,
          Documento:documento,
          Nombre:Nombre,
          Tipo:Tipo,
          });
          alert('Gracias por registrarse');
        }).catch(err => rejected(err));
      } else if (Tipo == 1) {
       this.Afauth.createUserWithEmailAndPassword(email,Password).then(res=>{
          this.db.collection("Usuarios").doc(email).set({
            Correo: email,
            Documento:documento,
            Nombre:Nombre,
            Tipo:Tipo,
          });
          alert('Gracias por registrarse');
        }).catch(err => rejected(err));
      }


    });
  }
}
