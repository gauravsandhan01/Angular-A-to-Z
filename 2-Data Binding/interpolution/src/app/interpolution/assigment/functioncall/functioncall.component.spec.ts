import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctioncallComponent } from './functioncall.component';

describe('FunctioncallComponent', () => {
  let component: FunctioncallComponent;
  let fixture: ComponentFixture<FunctioncallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctioncallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctioncallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
