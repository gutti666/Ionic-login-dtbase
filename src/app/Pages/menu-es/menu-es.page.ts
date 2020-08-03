import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../servicios/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-es',
  templateUrl: './menu-es.page.html',
  styleUrls: ['./menu-es.page.scss'],
})
export class MenuEsPage implements OnInit {
  Dc:string;
  Pages =[
    {
   title: "Inicio",
   url:'/menu-es/informacion'
 }
];
selectedPath = '';

  constructor(private router:Router, public  activaterRouter:ActivatedRoute, private aut:AuthService ,private menu:MenuController) {
    this.router.events.subscribe(
      (event: RouterEvent) => {
        if (event && event.url) {
          this.selectedPath = event.url;
        }
      }
    )
   }
 
  ngOnInit() {
  

    this.router.navigate(['menu-es/informacion']);
    this.menu.enable(true,'Nombre2');
 
}
onlog(){
  this.aut.logout();

}
}
