import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../_shared/data.service';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {
  public catagories: Array<Object>;

  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => console.log(params));
    this.dataService.currentCatagory.subscribe(catagories => this.catagories = catagories);
  }

  ngOnInit() {
  }

  openSubCatagory(catagory) {
    this.router.navigate(['/subcatagories']);
    this.dataService.changeSubCatagoryData(catagory.subcategories);
  }

}
