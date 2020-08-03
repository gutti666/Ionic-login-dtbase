import { AccionesService } from './../../servicios/acciones.service';
import { destroyView } from '@ionic/angular/directives/navigation/stack-utils';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegService } from './../../servicios/reg.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { user } from './../carga1/carga1.page';
import { element } from 'protractor';
import { AngularFireStorage} from "@angular/fire/storage";
import { Observable } from 'rxjs';
import { runInThisContext } from 'vm';




@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage{

Documento:number;
Estudiante:any=[];
Exito;
public  ID : string;
public Co: string;
public No: string;
public Tp = 2;
public Dc:string;
public foot:any;


// avariables modi
  public Email:string;
  public password:string;
  public Nombre: string;
  public Tipo = 1;
  public documento: string;
  public Img :string;
  public ulrimg: Observable<string>;
  public Foto2: any;



  constructor(

    private Store: AngularFireStorage,
    private RegService: RegService,
    private router: Router,
    public mod:AccionesService,
    public camera:Camera){ }

  async Take(){
    const options: CameraOptions =
    {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.camera.getPicture(options).then((imageData) => {
       this.Foto2 = `data:image/jpeg;base64,${imageData}`;
      
           }, (err) => {
     });
  }

Modificar() {
  console.log("entro mod ");
  const file = this.foot;
  const filepath=`upload/${this.Dc}`;
  const ref= this.Store.ref(filepath);
  const task = this.Store.upload(filepath, file);
  this.mod.addEstudiante(this.Co,this.Dc, this.Nombre, this.Tipo);
  this.router.navigate(['menu-ad/modificiar']);
 
}
up(element){
this.foot = element.target.files[0];
  
}


borrar() {
  alert('Estas seguro');
  console.log(this.ID);
  this.mod.BorrarEstudiante(this.ID);
  this.mod.BorrarUsuario(this.Co);
  this.router.navigate(['menu-ad/modificiar']);
}



  Buscar(){
    console.log("entro Buscar")
    this.RegService.getEstudiante(this.Documento).subscribe( Est =>{
    if (Est == 1){
      alert('el estudiante  no existe  ');
      } else {
     this.Exito = true;
     this.Estudiante.push(Est);
     this.Estudiante.forEach( element => {
     console.log(element);
     this.ID = element.id;
     this.No = element.Nombre;
     this.Co = element.Correo;
     this.Tp = element.Tipo;
     this.Dc = element.Documento;
     const filepath=`upload/${this.Dc}`;
     const ref= this.Store.ref(filepath);
     this.ulrimg= ref.getDownloadURL();
     });
    }
    });
  }


  }
