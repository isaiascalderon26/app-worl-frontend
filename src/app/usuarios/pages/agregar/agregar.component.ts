import { Component, OnInit } from '@angular/core';
import { Post, User } from '../../interfaces/usuarios.interfaces';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  post: Post = {
    id: '',
    title: '',
    text:  '',
    image: '', 
    tag:   '',
    date:  ''
}
  constructor(private usuariosService: UsuariosService) { }
  
  ngOnInit(): void {
  }

  public save(){
    if (this.post.title.trim().length === 0) {
      return;
    }
    this.usuariosService.addUsers(this.post).subscribe(resp => {
      console.log('respuest', resp);
      
    })
  }
}
