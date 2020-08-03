import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage} from "@angular/fire/storage";
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer,SafeResourceUrl } from "@angular/platform-browser";





@Component({
  selector: 'app-registro-ad',
  templateUrl: './registro-ad.page.html',
  styleUrls: ['./registro-ad.page.scss'],
})
export class RegistroAdPage implements OnInit {

   

  constructor( 
    private Auth:AuthService,
    private router:Router,
    private Store: AngularFireStorage,
    private camera:Camera) { }


  
  public Foto: string
  public Foto3:any;
  public Foto2: any;
  
  public Email:string;
  public password:string;
  public Nombre: string;
  public Tipo = 1;
  public documento : string;
  public ulrimg: Observable<string>;
  public url:any= [];


  ngOnInit() {
  }


  
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

   upload(element){

    this.Foto2 = element.target.files[0];
}

  onsubmitReg(){
   
    const file=this.Foto2;
    const filepath=`upload/${this.documento}`;
    const ref= this.Store.ref(filepath);
    const task = this.Store.upload(filepath, file);
    this.Email= this.Email.toLowerCase();
    this.Auth.RegistrarUser(this.Email, this.password,this.documento,this.Tipo,this.Nombre).then( Auth => {
    }).catch(err => console.log(err) );
    this.router.navigate(['menu-ad/modificiar']);
}
}
