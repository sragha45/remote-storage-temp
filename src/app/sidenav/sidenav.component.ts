import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  providers: [FetchDataService]
})
export class SidenavComponent implements OnInit {

  clusters: any;
  loaded: boolean = false;

  constructor(service: FetchDataService) {
    service.getData().subscribe(res => { console.log(res); this.clusters = res; this.loaded = true; });

  }

  ngOnInit() {
  }

}
