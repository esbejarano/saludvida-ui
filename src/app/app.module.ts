import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AntropometriaComponent } from './components/antropometria/antropometria.component';
import { AnamnesisComponent } from './components/anamnesis/anamnesis.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsuerAdminComponent } from './components/usuer-admin/usuer-admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PosturometriaComponent } from './components/posturometria/posturometria.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AntropometriaComponent,
    AnamnesisComponent,
    LoginComponent,
    RegisterComponent,
    UsuerAdminComponent,
    NavbarComponent,
    PosturometriaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
