import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url: String = '';
  public baseUri: String = '';
  
  private uri = '';
  private httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'timeout':'180000'
  });
  protected apriUri = '/tmssserver/api';
  protected publicApiUri = '/tmssserver/api/public';

  public option = {
    eader: this.httpHeader,
    search: {}
  };
  constructor() { }
}

export class AppError{
  constructor(public originalErr? : any){

  }
}

export class NotFoundError extends AppError{}
export class BadInput extends AppError{}
