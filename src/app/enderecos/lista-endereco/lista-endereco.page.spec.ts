import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEnderecoPage } from './lista-endereco.page';

describe('ListaEnderecoPage', () => {
  let component: ListaEnderecoPage;
  let fixture: ComponentFixture<ListaEnderecoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEnderecoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEnderecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
