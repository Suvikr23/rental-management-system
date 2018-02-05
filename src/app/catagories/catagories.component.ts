import { Component, OnInit } from '@angular/core';
import { DataService } from '../_shared/data.service';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {
  public catagories : Array<Object>;

  constructor(private dataService: DataService) {
    this.dataService.currentCatagory.subscribe(catagories => this.catagories = catagories);
   }

  ngOnInit() {
  }

}
