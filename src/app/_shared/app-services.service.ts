import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppServices {

  constructor(private http: Http) { 
   }

   public getJson(): Observable<any> {
     return this.http.get("../../assets/catalog.json")
                        .map((res: any) => res.json());
   }

}