import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacaoComponent } from './animacao.component';

describe('AnimacaoComponent', () => {
  let component: AnimacaoComponent;
  let fixture: ComponentFixture<AnimacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimacaoComponent]
    });
    fixture = TestBed.createComponent(AnimacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
