import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyNetsComponent } from './honey-nets.component';

describe('HoneyNetsComponent', () => {
  let component: HoneyNetsComponent;
  let fixture: ComponentFixture<HoneyNetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoneyNetsComponent]
    });
    fixture = TestBed.createComponent(HoneyNetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
