import { Component } from '@angular/core';
import { Auth } from '../service/auth';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-detail-page',
  imports: [AsyncPipe, DatePipe, RouterLink],
  templateUrl: './user-detail-page.html',
  styleUrl: './user-detail-page.css',
})
export class UserDetailPage {
  constructor(private auth: Auth) {

  }
  user!: Observable<any>

  ngOnInit() {
    this.user = this.auth.userDetail()
  }

}
