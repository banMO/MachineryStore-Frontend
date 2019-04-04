import {Injectable} from '@angular/core';
import {Machinery} from '../shared/machinery';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MachineryService {
  constructor(private http: HttpClient) {
  }

  createMachinery(machinery: Machinery): Observable<any> {
    return <Observable<Machinery>> this.http.post(baseURL + 'maquinarias/sp', machinery );
  }

  getMachineries(): Observable<Machinery[]> {
    return <Observable<Machinery[]>> this.http.get(baseURL + 'maquinarias');
  }

  deleteMachinery(id: Number): Observable<any> {
    return <Observable<any>> this.http.delete(baseURL + 'maquinarias/' + id);
  }
}
