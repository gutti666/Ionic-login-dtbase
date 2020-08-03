import { MenuAdPage } from './../menu-ad/menu-ad.page';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, RouterEvent } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  Pages =[
    {
      title: "Inicio",
      url:'/menu/Inicio'
    },
    {
      title: "Login",
      url:'/menu/login'
    },
    {
      title: "Registro",
      url:'/menu/registro'
    },
    {
      title: "Creditos",
      url:'/menu/creditos'
    }
  ];
  selectedPath = '';


  constructor(private router:Router,private menuController: MenuController) {
    this.router.events.subscribe(
      (event: RouterEvent) => {
        if (event && event.url) {
          this.selectedPath = event.url;
        }
      }
    )
   }
ionViewWillEnter(){
  this.menuController.enable(true,'Nombre');
  
 
}
  ngOnInit() {
  
    this.router.navigate(['/menu/Inicio']);
  }

}
