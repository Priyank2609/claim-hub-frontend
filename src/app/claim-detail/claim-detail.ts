import { Component } from '@angular/core';
import { Claim } from '../service/claim';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgClass, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Auth } from '../service/auth';

@Component({
  selector: 'app-claim-detail',
  imports: [AsyncPipe, NgClass, DatePipe, RouterLink, NgIf],
  templateUrl: './claim-detail.html',
  styleUrl: './claim-detail.css',
})
export class ClaimDetail {
  constructor(private claim: Claim, private route: ActivatedRoute) { }
  claimById!: Observable<any>


  ngOnInit() {

    const claimId = this.route.snapshot.params['id']
    this.claimById = this.claim.getClaimById(claimId)
    this.claim.getClaimById(claimId).subscribe((res) => {
      console.log(res);

    })


  }
}
