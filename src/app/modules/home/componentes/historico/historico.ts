import { Component, inject, OnInit } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter, faCar } from '@fortawesome/free-solid-svg-icons';
import { GastosService } from '../../../../core/services/gastos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historico',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './historico.html',
  styleUrl: './historico.scss',
})
export class Historico implements OnInit {
  faFilter = faFilter;
  faCar = faCar;

  listaGastos: any[] = [];

  gastosService = inject(GastosService);

  ngOnInit() {
    this.listarGastos();
  }

  listarGastos() {
    this.gastosService.getGastos()
    .subscribe({
      next: (gastos) => {
        this.listaGastos = gastos as any[];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
