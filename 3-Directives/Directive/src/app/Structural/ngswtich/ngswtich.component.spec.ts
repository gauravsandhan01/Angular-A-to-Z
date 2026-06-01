import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswtichComponent } from './ngswtich.component';

describe('NgswtichComponent', () => {
  let component: NgswtichComponent;
  let fixture: ComponentFixture<NgswtichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgswtichComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgswtichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
