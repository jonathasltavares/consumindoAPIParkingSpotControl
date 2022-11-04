import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResponseCarro } from 'src/app/model/response-carro';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = "http://localhost:8080/parking-spot"
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<any>(this.apiUrl)
  }

  save(carro: object){
    console.log(carro)
    return this.http.post<Object>(this.apiUrl, carro);
  }

  getById(id: string){
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  deleteById(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  editById(id: string, carro:ResponseCarro){
    return this.http.put(`${this.apiUrl}/${id}`, carro) 
  }
}
