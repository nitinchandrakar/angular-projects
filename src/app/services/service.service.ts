import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private subject = new BehaviorSubject<any>(null);
  private API_KEY:string = '9e1a2280862bc3616f9d';

  services$:Observable<any> = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  getAllCurrency():Observable<any>{
    return this.http.get<any>(`https://free.currconv.com/api/v7/currencies?apiKey=${this.API_KEY}`)
  }

  convertCurrency(amount: any, fromCurrency: any, toCurrency: any){
    fromCurrency = encodeURIComponent(fromCurrency);
    toCurrency = encodeURIComponent(toCurrency);
    const query = fromCurrency + '_' + toCurrency;

    return this.http.get<any>(`https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${this.API_KEY}`);
  }

}
