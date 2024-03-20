import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.css']
})
export class DailyReportsComponent implements OnInit {
  dailyReport!:{ id: string; name: string; };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.dailyReport = {
    //   // id:'daily1',
    //   id: this.route.snapshot.params['id'],
    //   // name: 'daily report 1'
    //   name: this.route.snapshot.params['name']
    // };

    this.route.params.subscribe((data: any) => {
      this.dailyReport = {
        // id:'daily1',
        id: data['id'],
        // name: 'daily report 1'
        name: data['name']
      };
    });
  }

}
