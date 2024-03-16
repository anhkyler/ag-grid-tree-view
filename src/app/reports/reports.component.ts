import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IOlympicData } from './interfaces'
import { getDataForTypeAhead } from './data';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
public columnDefs: ColDef[] = [
  { field: 'athlete', minWidth: 170 },
  { field: 'age' },
  { field: 'country' },
  { field: 'year' },
  { field: 'date' },
  { field: 'sport' },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
];
public defaultColDef: ColDef = {
  editable: true,
  filter: true,
};
public rowData!: IOlympicData[];
public themeClass: string =
  "ag-theme-quartz";
anycyProfileForm!: UntypedFormGroup;
dataSourceOrigin!: Observable<any>;
typeAheadLoading?: boolean;
constructor(private http: HttpClient,
  private fb:UntypedFormBuilder) {
    this.anycyProfileForm = this.fb.group({
      asyncOriginSearchString: new UntypedFormControl(null,[])
    });
   
  }

onGridReady(params: GridReadyEvent<IOlympicData>) {
  this.http
    .get<IOlympicData[]>(
      'https://www.ag-grid.com/example-assets/olympic-winners.json'
    )
    .subscribe((data) => (this.rowData = data));
}

  ngOnInit(): void {
    this.dataSourceOrigin = new Observable(
      (observer: any) => {
        var rawDataOrigin = getDataForTypeAhead();
        observer.next(rawDataOrigin);
      }
    );
  }


}
