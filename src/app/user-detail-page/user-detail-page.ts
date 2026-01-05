import { Component } from '@angular/core';
import { Auth } from '../service/auth';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-detail-page',
  imports: [AsyncPipe, DatePipe, RouterLink],
  templateUrl: './user-detail-page.html',
  styleUrl: './user-detail-page.css',
})
export class UserDetailPage {
  constructor(private auth: Auth, private route: ActivatedRoute) {

  }
  user!: Observable<any>

  ngOnInit() {

    const userId = this.route.snapshot.params['id']
    this.user = this.auth.userDetail(userId)
  }

}
