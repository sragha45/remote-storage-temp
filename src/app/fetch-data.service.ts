import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class FetchDataService {

  constructor(private http: Http) { }

  getData(): Observable<any> {
    let url = "http://10.107.44.15:5000/sidenav";
    return this.http.get(url).map(res => { return res.json(); });
  }
}