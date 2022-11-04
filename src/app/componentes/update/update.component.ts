import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ResponseCarro } from 'src/app/model/response-carro';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public carros$: ResponseCarro[] = []
  public idAtual: string = ''
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

  atualizar(){
    let itens = document.getElementsByTagName('input')
    let carro: ResponseCarro
    let stringcarro = '{'
    for (let i=0; i<itens.length; i++){
    stringcarro += `"${itens[i].getAttribute("alt")}":"${itens[i].value}",`
    }
    stringcarro = stringcarro.replace(/.$/, '}');
    carro = JSON.parse(stringcarro)
    this.services.editById(this.idAtual, carro).subscribe(
      resultado => {
        window.alert("Carro atualizado")
        this.getCarro()
        for (let i=0; i<itens.length; i++){
          itens[i].value = ""
        }
      },
      erro => {
        if (erro.status == 404) {
          window.alert("ID não encontrado")
          this.getCarro()
        }
      }  
    )
  }

  procurarUpdate(id:string){
    this.services.getById(id).subscribe(
      resultado => {
        let carro = resultado as ResponseCarro
        let form = document.getElementsByTagName('input')
        console.log(carro)
        console.log(form)
        form[0].value = carro.parkingSpotNumber
        form[1].value = carro.licensePlateCar
        form[2].value = carro.brandCar
        form[3].value = carro.modelCar
        form[4].value = carro.colorCar
        form[5].value = carro.responsibleName
        form[6].value = carro.apartment
        form[7].value = carro.block

        this.idAtual = carro.id
        
      },
      erro => {
        if (erro.status == 404) {
          window.alert("Carro não encontrado")
        }
      }  
    )
  }
}
