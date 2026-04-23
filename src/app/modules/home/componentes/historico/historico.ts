import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter, faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-historico',
  imports: [FontAwesomeModule],
  templateUrl: './historico.html',
  styleUrl: './historico.scss',
})
export class Historico {
  faFilter = faFilter;
  faCar = faCar;

}
