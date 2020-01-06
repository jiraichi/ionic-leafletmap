import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApumapComponent } from './apumap.component';

describe('ApumapComponent', () => {
  let component: ApumapComponent;
  let fixture: ComponentFixture<ApumapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApumapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApumapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
