import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon.service'; // Importa el servicio
import { Pokemon as PokemonComponent } from '../pokemon/pokemon'; 

@Component({
  selector: 'app-lista-pokemons',
  standalone: true,
  imports: [PokemonComponent],
  templateUrl: './lista-pokemons.html',
})
export class ListaPokemons implements OnInit {
  listaPokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (data) => {
        this.listaPokemon = data;
      },
      error: (err) => console.error('Error al leer de Node.js', err)
    });
  }
}