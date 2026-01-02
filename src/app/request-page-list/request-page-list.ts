import { ChangeDetectorRef, Component } from '@angular/core';
import { Quotes } from '../service/quote';
import { map, Observable } from 'rxjs';
import { AsyncPipe, DatePipe, SlicePipe, NgForOf, NgIf, NgClass } from '@angular/common';
import { Policy } from '../service/policy';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-request-page-list',
  imports: [AsyncPipe, DatePipe, SlicePipe, NgForOf, RouterLink, NgIf, NgClass],
  templateUrl: './request-page-list.html',
  styleUrl: './request-page-list.css',
})
export class RequestPageList {
  constructor(private quote: Quotes) { }
  requests!: Observable<any>
  pendindRequest!: Observable<any>


  ngOnInit() {
    this.requests = this.quote.getQuote()

    this.pendindRequest = this.requests.pipe(map(r => r.filter((p: any) => !p.policyId)))
  }






}
