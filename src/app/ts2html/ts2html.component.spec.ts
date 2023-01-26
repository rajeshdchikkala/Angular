import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ts2htmlComponent } from './ts2html.component';

describe('Ts2htmlComponent', () => {
  let component: Ts2htmlComponent;
  let fixture: ComponentFixture<Ts2htmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ts2htmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ts2htmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
