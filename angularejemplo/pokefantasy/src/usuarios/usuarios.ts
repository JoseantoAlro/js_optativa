import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Usuariointerface } from '../../models/usuariointerface';


@Component({
  selector: 'app-usuarios',
  imports: [RouterModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

    @Input() usuarios!: Usuariointerface;
}
