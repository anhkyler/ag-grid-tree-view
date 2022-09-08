import {Component} from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
    selector: 'child-cell',
    template: `<span *ngIf="isPresented"><i (click)="download()" class="fa fa-download"></i></span>`,
    styles: [
        `i:hover {
          cursor: pointer;
      }`,
    ],
})

export class DownloadButtonRendererComponent implements ICellRendererAngularComp {
    params: any;
    isPresented: boolean = false;
    agInit(params: ICellRendererParams<any, any>): void {
        this.params= params;
        this.isPresented = (this.params.data.filePath.includes(".")) ?  true : false;
    }
    
    download() {
      this.params.onClick(this.params.data);
      console.log(this.params);
    }
  
    refresh(): boolean {
      return false;
    }
  }