import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Carga1Page } from './carga1.page';

describe('Carga1Page', () => {
  let component: Carga1Page;
  let fixture: ComponentFixture<Carga1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carga1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Carga1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
