import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html2tsComponent } from './html2ts.component';

describe('Html2tsComponent', () => {
  let component: Html2tsComponent;
  let fixture: ComponentFixture<Html2tsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html2tsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Html2tsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
