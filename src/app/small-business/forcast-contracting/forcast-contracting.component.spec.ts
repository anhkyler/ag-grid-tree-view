import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastContractingComponent } from './forcast-contracting.component';

describe('ForcastContractingComponent', () => {
  let component: ForcastContractingComponent;
  let fixture: ComponentFixture<ForcastContractingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForcastContractingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForcastContractingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
