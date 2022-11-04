import { Component, OnInit } from '@angular/core';
import { ResponseCarro } from 'src/app/model/response-carro';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  
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

  deletarCarro(){
    let inputID = document.getElementById("IDinput") as HTMLInputElement
    let id = inputID.value
    this.services.deleteById(id).subscribe(
      resultado => {
      },
      code => {
        if (code.status == 404) {
          window.alert("Carro não encontrado")
        }else if(code.status == 200){
          window.alert("Carro deletado.")
          this.getCarro()
        }
      }  
    )
  }
  
}
