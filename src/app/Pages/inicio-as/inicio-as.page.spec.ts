import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioAsPage } from './inicio-as.page';

describe('InicioAsPage', () => {
  let component: InicioAsPage;
  let fixture: ComponentFixture<InicioAsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioAsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioAsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
