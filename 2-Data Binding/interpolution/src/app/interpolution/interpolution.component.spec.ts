import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolutionComponent } from './interpolution.component';

describe('InterpolutionComponent', () => {
  let component: InterpolutionComponent;
  let fixture: ComponentFixture<InterpolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
