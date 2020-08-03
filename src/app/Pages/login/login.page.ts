import { Router } from '@angular/router';
import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

import { userInfo } from 'os';
import { User, database } from 'firebase';
interface UsuariosT{
  ID:string;
  Correo:string,
  Documento:number,
  Nombre:string,
  Tipo:number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Email:string;
  password:string;
  public Usuarios:any=[];

  constructor(private auth: AuthService ,public router:Router,db:AngularFirestore) { }

  ngOnInit() {
    // this.auth.getUid().subcribe(userInfo =>{
    //   userInfo.map(us =>{
    //     console.log("holiwis" + us.payload.doc.id);
    //   })
    // });


    // this.auth.getUsuariosE().subscribe(user =>{
    //   user.map( users => {
       
    //     console.log(users.payload.doc.get("Tipo"));
    //     const data = users.payload.doc.data() as UsuariosT;
    //     const dat1= users.payload.doc.id;
    //     console.log(dat1);

    //     // data.ID = users.payload.doc.id;
      
    //     data.ID = users.payload.doc.id;
    //      console.log(data)
    //     this.Usuarios.push(data);

    //     this.Usuarios.forEach(element => {
         
         
    //     }
        
    //     );

        
         
      

        
          
    //     })

    //   })
   

  }
  Onsubmitlogin() {

    this.auth.login(this.Email, this.password).then(res => {
  
      
   }).catch(err => alert("los datos son incorrectos"));
   
  }

}
