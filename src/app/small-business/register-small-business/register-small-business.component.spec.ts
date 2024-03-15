import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSmallBusinessComponent } from './register-small-business.component';

describe('RegisterSmallBusinessComponent', () => {
  let component: RegisterSmallBusinessComponent;
  let fixture: ComponentFixture<RegisterSmallBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSmallBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterSmallBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
