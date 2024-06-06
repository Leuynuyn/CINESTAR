import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConponentsComponent } from './conponents.component';

describe('ConponentsComponent', () => {
  let component: ConponentsComponent;
  let fixture: ComponentFixture<ConponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
