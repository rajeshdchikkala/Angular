import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctstatusComponent } from './acctstatus.component';

describe('AcctstatusComponent', () => {
  let component: AcctstatusComponent;
  let fixture: ComponentFixture<AcctstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcctstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcctstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
