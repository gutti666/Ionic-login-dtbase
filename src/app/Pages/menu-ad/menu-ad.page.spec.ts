import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuAdPage } from './menu-ad.page';

describe('MenuAdPage', () => {
  let component: MenuAdPage;
  let fixture: ComponentFixture<MenuAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
