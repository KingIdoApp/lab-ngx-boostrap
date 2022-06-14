import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeDetailResolver implements Resolve<any> {
  constructor(private http: HttpClient) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url = `${environment.apiUrl}/flight`
    const params = { 'id': 1 };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<any>(url, { params, headers });
  }
}
