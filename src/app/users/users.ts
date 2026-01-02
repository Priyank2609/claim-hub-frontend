import { Component } from '@angular/core';
import { Auth } from '../service/auth';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-users',
  imports: [AsyncPipe, DatePipe, NgForOf, RouterLink, NgIf],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

  constructor(private auth: Auth) { }


  users!: Observable<any>


  ngOnInit() {
    this.users = this.auth.allUser()
  }

}
