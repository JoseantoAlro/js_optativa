import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  imports: [Heroes],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {

  @Input() heroes!:Heroes;
}
