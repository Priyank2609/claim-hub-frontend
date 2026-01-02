import { Component } from '@angular/core';

import { Policy } from '../service/policy';
import { Observable } from 'rxjs';
import { RouterLink } from "@angular/router";
import { NgForOf, AsyncPipe, DatePipe, NgIf, NgClass, LowerCasePipe } from '@angular/common';
import { Claim } from '../service/claim';

@Component({
  selector: 'app-customer-dashboard',
  imports: [AsyncPipe, DatePipe, NgClass, RouterLink, NgForOf, NgIf],
  templateUrl: './customer-dashboard.html',
  styleUrl: './customer-dashboard.css',
})
export class CustomerDashboard {
  constructor(private policy: Policy, private claim: Claim) { }
  policies!: Observable<any>

  claims!: Observable<any>

  ngOnInit() {
    this.policies = this.policy.myPolicies()
    this.claims = this.claim.getMyClaim()
    this.claim.getMyClaim().subscribe((res) => {
      console.log(res);

    })
  }
}
