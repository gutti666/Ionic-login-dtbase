import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/servicios/auth.service';
import { user } from './../Pages/carga1/carga1.page';


import { AngularFireModule } from '@angular/fire';
import { firestore, database } from 'firebase';
import { Pipe, PipeTransform } from '@angular/core';

import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule  } from "@angular/fire/firestore";



import {map} from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private db:AngularFirestore ,private aut:AngularFireAuth) { }
  
  getAllUser(){
    return this.db.collection("Admin").snapshotChanges();

  }

  getOneuser(IDuser:string){
  return this.db.doc(`Usuarios/${IDuser}`).snapshotChanges().pipe(map(action =>{
  if(action.payload.exists == false){
    return null;
    }else{
    const dta = action.payload.data() as user;
    dta.id = action.payload.id;
    console.log(dta);
    return dta;

  }

}));
  }
 getEstudiante(Docu:number){
    return this.db.doc(`Estudiantes/${Docu}`).snapshotChanges().pipe(map( action2 =>{
      if(action2.payload.exists === false){
      return 1;
      } else {
      const data2 = action2.payload.data() as user;
      data2.id = action2.payload.id;
      return data2;
      }
    }));

  }
}
