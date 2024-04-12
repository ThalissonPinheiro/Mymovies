import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerirComponent } from './terir.component';

describe('TerirComponent', () => {
  let component: TerirComponent;
  let fixture: ComponentFixture<TerirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerirComponent]
    });
    fixture = TestBed.createComponent(TerirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
