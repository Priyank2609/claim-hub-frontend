import { ChangeDetectorRef, Component } from '@angular/core';
import { Banner } from "../banner/banner";
import { About } from "../about/about";
import { Offering } from "../offering/offering";
import { Report } from "../report/report";
import { Blog } from "../blog/blog";
import { Quotes } from '../service/quote';
import { NgIf } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Auth } from '../service/auth';


@Component({
  selector: 'app-home',
  imports: [Banner, About, Offering, Report, Blog, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private quote: Quotes, private auth: Auth, private snackBar: MatSnackBar) { }


  pendingCount = 0
  showPopup = false
  role!: Observable<string>


  ngOnInit() {
    this.role = this.auth.checkRole



    this.quote.getQuote().subscribe((res: any) => {
      console.log(res);
      this.pendingCount = res.filter((r: any) => r.status === "Pending").length
      console.log(this.pendingCount);

      if (this.pendingCount > 0) {
        this.snackBar.open(` You have ${this.pendingCount} pending policy request(s)`, 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['snackbar-pending']
        })



      }

    })



  }

}
