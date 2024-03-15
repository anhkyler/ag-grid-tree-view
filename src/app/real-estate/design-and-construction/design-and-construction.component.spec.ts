import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAndConstructionComponent } from './design-and-construction.component';

describe('DesignAndConstructionComponent', () => {
  let component: DesignAndConstructionComponent;
  let fixture: ComponentFixture<DesignAndConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignAndConstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignAndConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
