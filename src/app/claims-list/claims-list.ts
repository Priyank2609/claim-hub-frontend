import { AsyncPipe, CurrencyPipe, DatePipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Claim } from '../service/claim';
import { Observable } from 'rxjs';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-claims-list',
  imports: [AsyncPipe, NgForOf, DatePipe, RouterLink, NgClass, NgIf],
  templateUrl: './claims-list.html',
  styleUrl: './claims-list.css',
})
export class ClaimsList {
  constructor(private claim: Claim) { }

  claims!: Observable<any>

  ngOnInit() {
    this.claims = this.claim.getAllClaims()
  }

}
