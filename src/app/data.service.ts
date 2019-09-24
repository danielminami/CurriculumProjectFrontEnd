import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getPersonalData () {

    /*
    This is my Heroku JavaSpring Endpoint
    return this.httpClient.get('https://curriculum-webapi.herokuapp.com/personaldata/list');
    */
    /*
    This is my local NodeJs Server Endpoint
    */
    return this.httpClient.get('http://localhost:3000/users');
  }
}
