import { Component } from '@angular/core';
import { Auth } from '../service/auth';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-banner',
  imports: [NgIf, AsyncPipe, RouterLink],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  constructor(private auth: Auth) { }

  role!: Observable<any>
  isLoggin!: Observable<any>

  ngOnInit() {
    this.role = this.auth.checkRole
    this.isLoggin = this.auth.checkToken
  }

}
