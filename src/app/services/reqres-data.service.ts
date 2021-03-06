import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReqresDataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(environment.reqresUrl+"/users");
  }

}

