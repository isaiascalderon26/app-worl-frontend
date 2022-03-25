import { Post } from './../../interfaces/usuarios.interfaces';
import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/usuarios.interfaces';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
  
})
export class ListadoComponent implements OnInit {

  public users: Post[] = []
  constructor( private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getUsers()
      .subscribe( resp => {
        this.users = resp.posts
      });
  }

}
