import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcademiaPage } from './academia.page';

describe('AcademiaPage', () => {
  let component: AcademiaPage;
  let fixture: ComponentFixture<AcademiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcademiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
