import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContaPage } from './criar-conta.page';

describe('CriarContaPage', () => {
  let component: CriarContaPage;
  let fixture: ComponentFixture<CriarContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarContaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
