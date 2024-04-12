import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesteirolComponent } from './besteirol.component';

describe('BesteirolComponent', () => {
  let component: BesteirolComponent;
  let fixture: ComponentFixture<BesteirolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BesteirolComponent]
    });
    fixture = TestBed.createComponent(BesteirolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
