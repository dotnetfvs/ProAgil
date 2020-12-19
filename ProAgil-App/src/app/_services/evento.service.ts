import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

constructor(private http: HttpClient) { }

baseURL = 'http://localhost:5000/api/evento';

// tslint:disable-next-line:typedef
getEvento(){
  return this.http.get(this.baseURL);
}


}
