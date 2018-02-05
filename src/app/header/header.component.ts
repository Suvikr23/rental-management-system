import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var jquery: any;
declare var $: any;

import { AppServices } from '../_shared/app-services.service';
import { DataService } from '../_shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppServices]
})
export class HeaderComponent implements OnInit {
  locationData: any;
  catagories: Array<Object>;

  constructor(private jsonService: AppServices,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
    this.jsonService.getJson().subscribe(data => {
      console.log(data.data);
      this.locationData = data.data.locations;
    })

    this.dataService.currentCatagory.subscribe(catagories => 
      this.catagories = catagories);
  }

  openCatagories(branch) {
    this.router.navigate(['/catagories', branch.name]);
    this.dataService.changeCatagoryData(branch.categories);
  }
}
