import { Component, inject } from '@angular/core';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GastosService } from '../../../../core/services/gastos.service';


@Component({
  selector: 'app-gasto',
  imports: [CurrencyMaskModule, FontAwesomeModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './gasto.html',
  styleUrl: './gasto.scss',
})
export class Gasto {
  faWallet = faWallet;

  gastosService = inject(GastosService);

  form = new FormGroup({
    valor: new FormControl(null, [Validators.required]),
    categoria: new FormControl(null, [Validators.required]),
    descricao: new FormControl(null, [Validators.required]),
    data: new FormControl(null, [Validators.required]),
  })

  onSubmit(){
   this.gastosService.setGasto(this.form.value)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.form.reset();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
