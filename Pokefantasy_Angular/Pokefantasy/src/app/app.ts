import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPokemons } from './components/lista-pokemons/lista-pokemons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaPokemons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pokefantasy');
}
