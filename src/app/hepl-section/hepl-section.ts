import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '../service/auth';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-hepl-section',
  imports: [NgIf, AsyncPipe],
  templateUrl: './hepl-section.html',
  styleUrl: './hepl-section.css',
})
export class HeplSection {
  constructor(private auth: Auth) { }
  role$!: Observable<String>


  ngOnInit() {
    this.role$ = this.auth.checkRole
  }

}
