import { Component, OnInit } from '@angular/core';
import { ResponseCarro } from 'src/app/model/response-carro';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-procurar',
  templateUrl: './procurar.component.html',
  styleUrls: ['./procurar.component.css']
})
export class ProcurarComponent implements OnInit {
  public carros$: ResponseCarro[] = []

  
  constructor(private services: ServiceService){
    this.getCarro()
  }
  ngOnInit(): void {
    this.getCarro()
  }

  getCarro(){
    this.services.getAll().subscribe((carro) => (this.carros$ = carro.content))
    console.log(this.carros$)
  }
  procurarCarro(){
    let inputID = document.getElementById("IDinput") as HTMLInputElement
    let id = inputID.value
    this.services.getById(id).subscribe(
      resultado => {
        this.carros$ = []
        this.carros$[0] = resultado as ResponseCarro
        console.log(this.carros$)
      },
      erro => {
        if (erro.status == 404) {
          window.alert("Carro não encontrado")
          this.getCarro()
        }
      }  
    )
  }
 
}
