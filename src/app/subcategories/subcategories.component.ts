import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../_shared/data.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {
  public subcatagories: Array<Object>;

  constructor(private dataService: DataService) {
    this.dataService.currentSubCatagory.subscribe(subcatagories => this.subcatagories = subcatagories);
  }

  ngOnInit() {
  }

}
