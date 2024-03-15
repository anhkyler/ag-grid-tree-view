import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBusinessResourceComponent } from './small-business-resource.component';

describe('SmallBusinessResourceComponent', () => {
  let component: SmallBusinessResourceComponent;
  let fixture: ComponentFixture<SmallBusinessResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallBusinessResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallBusinessResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
