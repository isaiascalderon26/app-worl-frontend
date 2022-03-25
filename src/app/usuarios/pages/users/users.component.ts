import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from '../../interfaces/usuarios.interfaces';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  styles :[`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class UsersComponent implements OnInit {

  user!: User;
  constructor(private activateRoute: ActivatedRoute,
    private usuariosService: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe(switchMap(({ id }) => this.usuariosService.getUsersId(id))).subscribe( user => this.user = user);
  }

  regresar(){
    this.router.navigate(['/listado/listado'])
  }
}
