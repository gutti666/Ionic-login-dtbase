import { EliminarPage } from './../Pages/eliminar/eliminar.page';
import { user } from './../Pages/carga1/carga1.page';
import { AuthService } from 'src/app/servicios/auth.service';

import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule  } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  constructor( private db:AngularFirestore , private user: AuthService) { }
  private Usuario: AngularFirestoreDocument;

  BorrarEstudiante(ID: string){
     this.db.doc(`Estudiantes/${ID}`).delete();
  }

  BorrarUsuario(Email:string)
  {    this.db.doc(`Usuarios/${Email}`).delete();
    }

   addEstudiante(Co:string, Dc:string , Nombre: string, Tipo: number){

    this.db.collection("Usuarios").doc(Co).update({
      Nombre: Nombre,
      Tipo:Tipo,
    });
    this.db.collection("Estudiantes").doc(Dc).update({
      Nombre: Nombre,
      Tipo:Tipo,
    });

    alert("Usuario modificado");
    }
  }