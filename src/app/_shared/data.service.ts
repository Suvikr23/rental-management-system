import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private catagoryData = new BehaviorSubject<Array<Object>>([{ "default": "default" }]);
  private subCatagoryData = new BehaviorSubject<Array<Object>>([{ "default": "default" }]);
  currentCatagory = this.catagoryData.asObservable();
  currentSubCatagory = this.subCatagoryData.asObservable();

  constructor() { }

  changeCatagoryData(catagories: Array<Object>) {
    this.catagoryData.next(catagories);
  }

  changeSubCatagoryData(catagories: Array<Object>) {
    this.subCatagoryData.next(catagories);
  }

}
