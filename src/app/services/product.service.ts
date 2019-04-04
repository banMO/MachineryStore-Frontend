import {Injectable} from '@angular/core';
import {Product} from '../shared/product';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  // getItems(): Observable<Product[]> {
  //   // return Observable.of(ITEMS).delay(2000);
  //   return <Observable<Item[]>>this.http.get(baseURL + 'items');
  // }

  // getItem(id: number): Observable<Item> {
  //   return <Observable<Item>>this.http.get(baseURL + 'items/' + id);
  // }

  // getFeaturedItem(): Observable<Item> {
  //   return <Observable<Item>>this.http.get(baseURL + 'items?featured=true');
  // }

  // getItemIds(): Observable<number[]> {
  //   return <Observable<number[]>>this.http.get(baseURL + 'items').pipe(map(items => (<Item[]>items).map(item => item.id)));
  // }

  crearProducto(product: Product): Observable<any> {
    return <Observable<any>>this.http.post(baseURL + 'maquinarias/sp', product )
  }
}
