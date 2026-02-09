import { Component, Input } from '@angular/core';
import { PokemonDatos } from '../pokemon.modelo';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon {

  @Input() pokemon!: PokemonDatos;
}
