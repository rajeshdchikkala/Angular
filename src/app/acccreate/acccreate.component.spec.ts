import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcccreateComponent } from './acccreate.component';

describe('AcccreateComponent', () => {
  let component: AcccreateComponent;
  let fixture: ComponentFixture<AcccreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcccreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcccreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
