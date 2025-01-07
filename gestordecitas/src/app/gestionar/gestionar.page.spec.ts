import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionarPage } from './gestionar.page';

describe('GestionarPage', () => {
  let component: GestionarPage;
  let fixture: ComponentFixture<GestionarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
