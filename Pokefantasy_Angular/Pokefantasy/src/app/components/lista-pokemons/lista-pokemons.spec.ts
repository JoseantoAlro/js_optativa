import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPokemons } from './lista-pokemons';

describe('ListaPokemons', () => {
  let component: ListaPokemons;
  let fixture: ComponentFixture<ListaPokemons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPokemons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPokemons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
