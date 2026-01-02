import { ChangeDetectorRef, Component } from '@angular/core';
import { Claim } from '../service/claim';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { Policy } from '../service/policy';
import { Auth } from '../service/auth';



@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe, NgIf],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private claim: Claim, private check: ChangeDetectorRef, private policy: Policy, private auth: Auth) { }
  claims!: Observable<any>
  monthlyChart?: Chart;
  claimStatusChart!: Chart;
  policies!: Observable<any>
  role$!: Observable<String>


  ngAfterViewInit() {
    // now the canvas exists in DOM
    this.loadMonth();
    this.loadClaimStatusChart();
    this.role$ = this.auth.checkRole
    console.log(this.role$);


  }

  ngOnInit() {
    this.claim.getClaimSummary().subscribe((res) => {
      console.log(res);

    })

    this.claims = this.claim.getClaimSummary()
    this.claim.monthlyClaim().subscribe(res => {
      console.log('Monthly response:', res);
    });
    this.policies = this.policy.totalPolicy()


  }

  loadMonth() {
    this.claim.monthlyClaim().subscribe(res => {

      const labels = res.map(item =>
        new Date(item.month + '-01').toLocaleString('default', {
          month: 'short',
          year: 'numeric'
        })
      );

      const values = res.map(item => item.count);

      this.renderMonthlyClaimsChart(labels, values);
      this.check.markForCheck()
    });
  }


  renderMonthlyClaimsChart(labels: string[], data: number[]) {
    this.monthlyChart?.destroy();

    this.monthlyChart = new Chart('monthlyClaimsChart', {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Claims per Month',
            data,
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 }
          }
        }
      }
    });
  }
  loadClaimStatusChart() {
    this.claim.getClaimSummary().subscribe((res: any) => {


      const labels = Object.keys(res);
      console.log(labels);

      const values = Object.values(res);
      console.log(values);


      this.renderClaimStatusChart(labels, values as number[]);
      this.check.markForCheck()
    });
  }
  renderClaimStatusChart(labels: string[], data: number[]) {

    this.claimStatusChart?.destroy();

    this.claimStatusChart = new Chart('claimStatusPieChart', {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: [
              '#efec44ff',
              '#8015faff',
              '#38bdf8',
              '#22c55e',
              '#ef4444',
            ],
            borderColor: '#020617',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#e5e7eb',
              font: {
                size: 11,
                weight: 600
              }
            }
          },
          tooltip: {
            backgroundColor: '#020617',
            titleColor: '#fff',
            bodyColor: '#cbd5f5',
            borderColor: '#38bdf8',
            borderWidth: 1
          }
        }
      }
    });
  }


}
