import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AntropometriaComponent } from './components/antropometria/antropometria.component';
import { AnamnesisComponent } from './components/anamnesis/anamnesis.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsuerAdminComponent } from './components/usuer-admin/usuer-admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PosturometriaComponent } from './components/posturometria/posturometria.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        BrowserAnimationsModule,
        FormsModule,
        NgbModule.forRoot(),
        AppRoutingModule
    ],
    bootstrap: [AppComponent],
    providers: [],
})
export class AppModule { }
