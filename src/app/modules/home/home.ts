import { Component } from '@angular/core';

import { Gasto } from './componentes/gasto/gasto';
import { Historico } from "./componentes/historico/historico";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Gasto, Historico],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
