import { Component } from '@angular/core';
import { Policy } from '../service/policy';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Auth } from '../service/auth';

@Component({
  selector: 'app-policy-detail',
  imports: [AsyncPipe, DatePipe, NgIf, RouterLink],
  templateUrl: './policy-detail.html',
  styleUrl: './policy-detail.css',
})
export class PolicyDetail {
  constructor(private policy: Policy, private route: ActivatedRoute, private auth: Auth) { }
  policyDetail!: Observable<any>
  role!: Observable<string>

  ngOnInit() {
    const policyId = this.route.snapshot.params['id']
    this.policyDetail = this.policy.policyById(policyId)
    this.role = this.auth.checkRole

  }
  download(policyId: string) {
    this.policy.downloadPolicy(policyId).subscribe({
      next: (blob) => {

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `LifePolicy-${policyId}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => console.error('Download error:', err)
    });
  }

}
