import { AccionesService } from './../../servicios/acciones.service';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { RegService } from './../../servicios/reg.service';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../servicios/auth.service';
import { MenuController } from '@ionic/angular';
import { AngularFireStorage} from "@angular/fire/storage";


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  Documento:number;
  DocuF:string;
  Exito;
  Estudiante:any=[];
  User:any=[];
  ulrimg: Observable<string>
 
public  iD : string;
public Co: string;
public No: string;
public Tp = 2;
public Dc: number;

 

constructor(
  private router: Router,
  public reg: RegService ,
  public acc: AccionesService,
  public Store: AngularFireStorage,
  public  activaterRouter:ActivatedRoute,
  private aut:AuthService ,
  private menu:MenuController) {}
 
  ngOnInit() {
   const dat1 = this.aut.current();
   console.log(dat1);
   // obtner Usuario
   this.reg.getOneuser(dat1).subscribe( Use => {
    this.User.push(Use);
    this.User.forEach( elementd => {
      this.Documento= elementd.Documento;
      console.log( "Adentro" + this.Documento);

      /// Estudiante

      this.reg.getEstudiante(this.Documento).subscribe( Est => {
        if (Est === 1) {
           alert('Usted no se encuentra registrado');
           } else {
          this.Exito = true;
          this.Estudiante.push(Est);
          this.Estudiante.forEach( element4 => {
          const filepath = `upload/${this.Documento}`;
          const ref = this.Store.ref(filepath);
          this.ulrimg = ref.getDownloadURL();
          });
         }
         });
    });
   });
   }


  }
