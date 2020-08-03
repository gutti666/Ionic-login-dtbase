import { Router } from '@angular/router';
import { auth } from 'firebase';
import { AuthService } from './../../servicios/auth.service';

import { Component, OnInit } from '@angular/core';
import { AngularFireStorage} from "@angular/fire/storage";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public Foto:any;
  public Foto2: any;


  public Email:string;
  public password:string;
  public Nombre: string;
  public Tipo: number;
  public documento : string;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Store: AngularFireStorage,
    public camera:Camera) { }

  ngOnInit() {
  }

  //Camara
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
  //File 
  upload(element){

    this.Foto = element.target.files[0];
 
   }
  


  onsubmitReg(){
    const file= this.Foto;
    const filepath = `upload/${this.documento}`;
    const ref= this.Store.ref(filepath);
    const task = this.Store.upload(filepath, file);
    this.Email= this.Email.toLowerCase();

    this.Auth.RegistrarUser(this.Email, this.password,this.documento,this.Tipo,this.Nombre).then(()=>{
     }).catch(err => alert('El correo se encuentra ya en uso')  );
    this.router.navigate(['/menu/Inicio']);
    }

   
  }


