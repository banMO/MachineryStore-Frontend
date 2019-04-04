import {Injectable} from '@angular/core';
import {Categoria} from '../shared/category';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Categoria[]> {
    return <Observable<Categoria[]>> this.http.get(baseURL + 'categorias');
  }
}
