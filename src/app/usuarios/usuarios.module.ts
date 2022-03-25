import { MaterialModule } from './../material/material.module';
import { UsersRoutingModule } from './usuario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

 

@NgModule({
  declarations: [
    UsersComponent,
    AgregarComponent,
    ListadoComponent,
    EditarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsuariosModule { }
