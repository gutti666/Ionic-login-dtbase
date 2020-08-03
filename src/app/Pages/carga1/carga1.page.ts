import { AuthService } from 'src/app/servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RegService } from './../../servicios/reg.service';
import { ActivatedRoute, Router } from '@angular/router';
import { database, auth } from 'firebase';

import { from } from 'rxjs';
import { element } from 'protractor';
import { ThrowStmt } from '@angular/compiler';
import { MenuController } from '@ionic/angular';
export interface user{
  id:string;
  Correo:string;
  Documento:number;
  Nombre:string;
  Tipo:number;
}
@Component({
  selector: 'app-carga1',
  templateUrl: './carga1.page.html',
  styleUrls: ['./carga1.page.scss'],
})
export class Carga1Page implements OnInit {

  public Fianl :any = [];
  public ID:string;

  
  constructor( public Reg:RegService, public  activaterRouter:ActivatedRoute ,public router:Router,
    private menuController: MenuController, public auth:AuthService) { }

  ngOnInit() {

   

    this.ID=this.activaterRouter.snapshot.paramMap.get("ID");

    this.Reg.getOneuser(this.ID).subscribe(usuario =>{
      this.Fianl.push(usuario);
      this.Fianl.forEach(element => {
        console.log(element.Tipo);
        if (element.Tipo === "1" )
        {
          this.router.navigate(['/menu-ad']);
        } else if (element.Tipo === "2"){

          this.router.navigate(['/menu-es']);
        }
      });
    });
    }
}
