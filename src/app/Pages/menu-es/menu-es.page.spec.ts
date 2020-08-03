import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuEsPage } from './menu-es.page';

describe('MenuEsPage', () => {
  let component: MenuEsPage;
  let fixture: ComponentFixture<MenuEsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuEsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
