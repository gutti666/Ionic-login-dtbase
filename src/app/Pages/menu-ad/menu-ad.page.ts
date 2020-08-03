import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-menu-ad',
  templateUrl: './menu-ad.page.html',
  styleUrls: ['./menu-ad.page.scss'],
})
export class MenuAdPage implements OnInit {
  Pages =[
       {
      title: "Inicio",
      url:'/menu-ad/modificiar'
    },
    {
      title: "Regristro",
      url:'/menu-ad/registro-ad'
    },
    {
      title: "Buscar Estudiante",
      url:'/menu-ad/eliminar'
    }
  ];
  selectedPath = '';

  constructor(private router:Router , private aut:AuthService ,private menu:MenuController) {
    this.router.events.subscribe(
      (event: RouterEvent) => {
        if (event && event.url) {
          this.selectedPath = event.url;
        }
      }
    )
   }

  ngOnInit() {
    this.menu.enable(true,'content2');
    this.router.navigate(['/menu-ad/modificiar']);
  }
  onlog(){
    this.aut.logout();
    this.menu.enable(true,'Nombre');
    
  }

}
