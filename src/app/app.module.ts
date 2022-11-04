import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { UpdateComponent } from './componentes/update/update.component';
import { DeleteComponent } from './componentes/delete/delete.component';
import { ProcurarComponent } from './componentes/procurar/procurar.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    UpdateComponent,
    DeleteComponent,
    ProcurarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
