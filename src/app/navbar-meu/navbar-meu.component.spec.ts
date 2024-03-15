import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMeuComponent } from './navbar-meu.component';

describe('NavbarMeuComponent', () => {
  let component: NavbarMeuComponent;
  let fixture: ComponentFixture<NavbarMeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMeuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarMeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
