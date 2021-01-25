import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarTipComponent } from './snack-bar-tip.component';

describe('SnackBarTipComponent', () => {
  let component: SnackBarTipComponent;
  let fixture: ComponentFixture<SnackBarTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
