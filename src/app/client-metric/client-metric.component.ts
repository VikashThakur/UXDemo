import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client-metric',
  templateUrl: './client-metric.component.html',
  styleUrls: ['./client-metric.component.css']
})
export class ClientMetricComponent implements OnInit {

  dataKeys: any[] = [];
  selectedKeys: any[] = [];
  dataObj: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getClientMetrics()
      .subscribe(
        (response) => {
          this.dataObj = response;
          this.dataKeys = Object.keys(this.dataObj);
          this.selectedKeys = this.dataKeys;
        },
        (error) => {
          console.log(error);
        });
  }
}
