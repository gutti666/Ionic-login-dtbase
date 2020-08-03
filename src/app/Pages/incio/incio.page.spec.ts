import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncioPage } from './incio.page';

describe('IncioPage', () => {
  let component: IncioPage;
  let fixture: ComponentFixture<IncioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
