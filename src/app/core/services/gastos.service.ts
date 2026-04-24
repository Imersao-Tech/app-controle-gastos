import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GastosService {
  url_api = 'http://localhost:3000/gastos';

  http = inject(HttpClient);

  getGastos() {
    return this.http.get(this.url_api);
  }

  setGasto(gasto: any) {
    return this.http.post(this.url_api, gasto);
  }
}
