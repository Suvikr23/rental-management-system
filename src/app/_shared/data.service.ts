import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private catagoryData = new BehaviorSubject<Array<Object>>([{ "default": "default" }]);
  currentCatagory = this.catagoryData.asObservable();

  constructor() { }

  changeCatagoryData(catagories: Array<Object>) {
    this.catagoryData.next(catagories);
  }

}
