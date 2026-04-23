import { Component } from '@angular/core';
import { CurrencyMaskModule } from "ng2-currency-mask";

@Component({
  selector: 'app-gasto',
  imports: [CurrencyMaskModule],
  standalone: true,
  templateUrl: './gasto.html',
  styleUrl: './gasto.scss',
})
export class Gasto {}
