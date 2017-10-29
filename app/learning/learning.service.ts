import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Device } from './models/device.interface';

const DATA_API: string = '/api/';

@Injectable()
export class LearningService {
  constructor(private http: Http) {}

  getData(postfix): Observable<any[]> {
    return this.http
    .get(DATA_API+postfix)
    .map((response: Response) => response.json());
  }

  sentData(params) {
    this.http.get('http://localhost:4000/',{search: params})
    .map((response: Response) => response.json())
    .catch((error:any) =>{return Observable.throw(error);})
    .subscribe(data => console.log(data));
  }

}