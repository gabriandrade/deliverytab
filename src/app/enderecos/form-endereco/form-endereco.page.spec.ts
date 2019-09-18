import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnderecoPage } from './form-endereco.page';

describe('FormEnderecoPage', () => {
  let component: FormEnderecoPage;
  let fixture: ComponentFixture<FormEnderecoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnderecoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnderecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
