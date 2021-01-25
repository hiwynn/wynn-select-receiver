import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSelectReceiverComponent } from './show-select-receiver.component';

describe('ShowSelectReceiverComponent', () => {
  let component: ShowSelectReceiverComponent;
  let fixture: ComponentFixture<ShowSelectReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSelectReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSelectReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
