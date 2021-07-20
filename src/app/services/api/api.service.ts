import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersI } from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor(private httpClient:HttpClient) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/users');
  }
}
