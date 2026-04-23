import { Component, inject, OnInit } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter, faCar, faUtensils, faHouse, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
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

  listaGastos: any[] = [];

  gastosService = inject(GastosService);

  // Mapeamento de categorias para ícones
  categoriaIconMap: Record<string, IconDefinition> = {
    transporte: faCar,
    alimentacao: faUtensils,
    moradia: faHouse,
    lazer: faGamepad,
  };

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

  // Método para obter o ícone baseado na categoria
  getIconByCategoria(categoria: string): IconDefinition {
    return this.categoriaIconMap[categoria] || faCar;
  }
}
