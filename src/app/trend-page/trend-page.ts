import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trend-page',
  imports: [NgForOf],
  templateUrl: './trend-page.html',
  styleUrl: './trend-page.css',
})
export class TrendPage {
  trendsList = [
    { title: 'AI-Driven Underwriting', description: 'Using AI to speed up risk assessment and personalization.' },
    { title: 'Blockchain in Claims', description: 'Transparent claims validation using decentralized ledgers.' },
    { title: 'Telematics Adoption', description: 'More usage-based insurance powered by real-time vehicle data.' },
    { title: 'Cybersecurity Coverage Growth', description: 'More products for digital risk protection.' },
    { title: 'Data Privacy Regulations', description: 'Stronger laws affecting how customer data is stored and used.' }
  ];

  insights = [
    'Insurers are increasing investment in digital technologies.',
    'Customer expectations are pushing for faster service and more transparency.',
    'Regulatory focus on data protection will shape product design.',
    'Partnerships tech-insurer ecosystems are expanding globally.'
  ];
}
