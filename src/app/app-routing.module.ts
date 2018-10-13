import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnamnesisComponent } from './components/anamnesis/anamnesis.component';
import { LoginComponent } from './components/login/login.component';
import { AntropometriaComponent } from './components/antropometria/antropometria.component';
import { RegisterComponent } from './components/register/register.component';
import { UsuerAdminComponent } from './components/usuer-admin/usuer-admin.component';
import { PosturometriaComponent } from './components/posturometria/posturometria.component';
import { InicioComponent } from './components/inicio/inicio.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: '**', component: LoginComponent },
    { path: 'index', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'anamnesis', component: AnamnesisComponent },
    { path: 'antropometria', component: AntropometriaComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'useradmin', component: UsuerAdminComponent },
    { path: 'posturometria', component: PosturometriaComponent }
];


@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
