import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, User } from '../interfaces/usuarios.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) {} 

  getUsers(): Observable<User>{
    return this.http.get<User>('http://localhost:3005/post');
  }

  getUsersId(_id: string): Observable<User>{
    //return this.http.get<User>(`http://localhost:3005/${_id}`);
    return this.http.get<User>('http://localhost:3005/post');
  }

  addUsers(user: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3005/post', user);
  }
}
