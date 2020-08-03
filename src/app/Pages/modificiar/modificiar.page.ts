import { AngularFirestore } from '@angular/fire/firestore';
import { RegService } from './../../servicios/reg.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { database } from 'firebase';

import { from } from 'rxjs';
import { element } from 'protractor';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-modificiar',
  templateUrl: './modificiar.page.html',
  styleUrls: ['./modificiar.page.scss'],
})
export class ModificiarPage implements OnInit {

  constructor( ) { }
  

  ngOnInit() {
  }

}