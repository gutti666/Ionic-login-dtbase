import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroAdPage } from './registro-ad.page';

describe('RegistroAdPage', () => {
  let component: RegistroAdPage;
  let fixture: ComponentFixture<RegistroAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
