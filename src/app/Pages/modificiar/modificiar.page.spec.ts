import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificiarPage } from './modificiar.page';

describe('ModificiarPage', () => {
  let component: ModificiarPage;
  let fixture: ComponentFixture<ModificiarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificiarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificiarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
