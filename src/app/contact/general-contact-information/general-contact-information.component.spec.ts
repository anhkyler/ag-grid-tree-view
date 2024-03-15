import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralContactInformationComponent } from './general-contact-information.component';

describe('GeneralContactInformationComponent', () => {
  let component: GeneralContactInformationComponent;
  let fixture: ComponentFixture<GeneralContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralContactInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
