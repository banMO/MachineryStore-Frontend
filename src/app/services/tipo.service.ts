import {Injectable} from '@angular/core';
import {Tipo} from '../shared/tipo';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  constructor(private http: HttpClient) {
  }

  getTipos(): Observable<Tipo[]> {
    return <Observable<Tipo[]>> this.http.get(baseURL + 'tipoMaquinarias');
  }
}
