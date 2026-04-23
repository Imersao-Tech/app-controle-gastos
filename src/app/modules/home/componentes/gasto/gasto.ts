import { Component } from '@angular/core';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-gasto',
  imports: [CurrencyMaskModule, FontAwesomeModule],
  standalone: true,
  templateUrl: './gasto.html',
  styleUrl: './gasto.scss',
})
export class Gasto {
  faWallet = faWallet;
}
