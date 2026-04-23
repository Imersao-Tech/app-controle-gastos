import { Component } from '@angular/core';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-gasto',
  imports: [CurrencyMaskModule, FontAwesomeModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './gasto.html',
  styleUrl: './gasto.scss',
})
export class Gasto {
  faWallet = faWallet;

  form = new FormGroup({
    valor: new FormControl(null, [Validators.required]),
    categoria: new FormControl(null, [Validators.required]),
    descricao: new FormControl(null, [Validators.required]),
    data: new FormControl(null, [Validators.required]),
  })
  
  onSubmit(){
   
  }
}
