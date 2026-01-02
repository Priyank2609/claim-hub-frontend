import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../service/policy';
import { AsyncPipe, NgForOf, NgClass, NgIf } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Auth } from '../service/auth';


@Component({
  selector: 'app-policy-lists',
  imports: [NgForOf, AsyncPipe, NgClass, RouterLink, NgIf],
  templateUrl: './policy-lists.html',
  styleUrl: './policy-lists.css',
})
export class PolicyLists {
  constructor(private policy: Policy, private auth: Auth) { }
  policiesList!: Observable<any>
  isLoggedIn!: Observable<any>
  role!: Observable<any>

  ngOnInit() {
    this.policiesList = this.policy.getAllPolicy()
    this.isLoggedIn = this.auth.checkToken
    this.role = this.auth.checkRole
    this.getAllPolicies()
  }
  getAllPolicies() {
    this.policy.getAllPolicy().subscribe({
      next: (res => console.log(res)
      )
    })
  }
  getPolicyIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'Life': 'fas fa-heartbeat',
      'Vehicle': 'fas fa-car',
      'Car': 'fas fa-car',
      'Home': 'fas fa-home',
      'Health': 'fas fa-stethoscope',
      'Travel': 'fas fa-plane',
      'Business': 'fas fa-briefcase'
    };
    return icons[type] || 'fas fa-shield-alt';
  }
}
