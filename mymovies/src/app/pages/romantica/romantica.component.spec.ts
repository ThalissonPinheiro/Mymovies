import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanticaComponent } from './romantica.component';

describe('RomanticaComponent', () => {
  let component: RomanticaComponent;
  let fixture: ComponentFixture<RomanticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RomanticaComponent]
    });
    fixture = TestBed.createComponent(RomanticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
