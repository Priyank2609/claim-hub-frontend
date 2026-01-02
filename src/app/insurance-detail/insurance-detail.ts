import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
interface PolicyInfo {
  title: string;
  imageUrl: string;
  description: string;
  features: string[];
  bannerImage?: string;
  promoImage?: string // optional hero image
}
@Component({
  selector: 'app-insurance-detail',
  imports: [NgIf, NgForOf, RouterLink, RouterLinkActive],
  templateUrl: './insurance-detail.html',
  styleUrl: './insurance-detail.css',
})
export class InsuranceDetail {
  policy: PolicyInfo | null = null;

  currentSlug: string = 'car';
  constructor(private route: ActivatedRoute) { }
  isMenuOpen = false;



  private policiesData: { [key: string]: PolicyInfo } = {
    car: {
      title: 'Car Insurance',
      imageUrl: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200',
      bannerImage: 'https://static.vecteezy.com/system/resources/previews/025/402/418/non_2x/car-protection-and-safety-assurance-concept-car-insurance-web-banner-design-small-yellow-automobile-hatchback-under-the-yellow-umbrella-isolated-on-white-background-cartoon-style-3d-rendering-photo.jpg',
      description: 'Drive with confidence knowing your vehicle is fully protected. Our comprehensive car insurance covers accidents, theft, natural disasters, third-party liability, and more. Enjoy add-ons like zero depreciation, roadside assistance, and engine protection for complete peace of mind.',
      promoImage: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1400', // Updated working promo image
      features: [
        'Comprehensive & Third-Party Coverage',
        'Zero Depreciation Add-on Available',
        '24/7 Roadside Assistance',
        'Cashless Claims at 5000+ Network Garages',
        'No Claim Bonus up to 50%',
        'Personal Accident Cover for Owner-Driver'
      ]
    },
    life: {
      title: 'Life Insurance',
      imageUrl: 'https://images.pexels.com/photos/4386469/pexels-photo-4386469.jpeg?auto=compress&cs=tinysrgb&w=1200',
      bannerImage: 'https://c8.alamy.com/comp/2KFH8X6/family-life-and-health-insurance-banner-concept-parents-and-children-near-protection-shield-with-medical-symbol-young-couple-and-kids-medical-support-healthcare-vector-eps-illustration-2KFH8X6.jpg',
      description: 'Secure your family\'s financial future even when you\'re not around. Our life insurance plans provide high coverage at affordable premiums, with flexible term and whole life options. Get tax benefits and optional riders for critical illness and accidental death.',
      promoImage: 'https://images.pexels.com/photos/4386469/pexels-photo-4386469.jpeg?auto=compress&cs=tinysrgb&w=1400',
      features: [
        'Term Life, Whole Life & Endowment Plans',
        'Tax Benefits under Section 80C & 10(10D)',
        'Critical Illness & Accidental Death Riders',
        'Maturity Benefits & Loyalty Additions',
        'Guaranteed Payout to Nominee',
        'Online Premium Payment Discounts'
      ]
    },
    health: {
      title: 'Health Insurance',
      imageUrl: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200',
      bannerImage: 'https://img.freepik.com/premium-vector/professional-medical-clinic-banner-design_941802-3767.jpg',
      description: 'Protect yourself and your loved ones from rising medical costs. Our health insurance offers cashless treatment at thousands of hospitals, coverage for pre/post hospitalization, daycare procedures, and annual health check-ups. Family floater plans available for maximum savings.',
      promoImage: 'https://www.creativefabrica.com/wp-content/uploads/2022/08/09/Health-promotional-banner-design-Graphics-35819064-1-1-580x386.jpg',
      features: [
        'Cashless Treatment at 10,000+ Hospitals',
        'No Room Rent or Treatment Capping',
        'Coverage for Pre & Post Hospitalization',
        'Daycare Procedures & Modern Treatments',
        'Free Annual Health Check-ups',
        'Family Floater & Individual Plans'
      ]
    },
    home: {
      title: 'Home Insurance',
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
      bannerImage: 'https://cdn.stratospherewebsites.com/source/sites/f5e47a4f-e518-478a-8c5c-0fbd986fae0f/images/blue-minimalist-isometric-health-insurance-blog-banner.jpg',
      description: 'Your home is your biggest investment — protect it from fire, burglary, floods, earthquakes, and other perils. Cover both structure and contents with optional add-ons for jewelry, appliances, and personal accident.',
      promoImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1400',
      features: [
        'Structure & Contents Coverage',
        'Protection Against Fire, Theft & Natural Calamities',
        'Burglary & Theft Insurance',
        'Alternative Accommodation Cover',
        'Personal Accident Add-on'
      ]
    },
    business: {
      title: 'Business Insurance',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      bannerImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600',
      promoImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1400', // Added promo image
      description: 'Safeguard your business from unexpected risks. Get coverage for property damage, liability claims, employee injuries, and business interruption to ensure continuity even in tough times.',
      features: [
        'Property & Asset Protection',
        'Public Liability Coverage',
        'Employee Compensation',
        'Business Interruption Loss'
      ]
    },
    travel: {
      title: 'Travel Insurance',
      imageUrl: 'https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
      bannerImage: 'https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600',
      promoImage: "https://images.pexels.com/photos/3769710/pexels-photo-3769710.jpeg?auto=compress&cs=tinysrgb&w=1400",
      description: 'Travel worry-free with coverage for medical emergencies abroad, trip cancellations, lost baggage, flight delays, and personal liability. Single trip and annual multi-trip plans available.',
      features: [
        'Overseas Medical Emergency Cover',
        'Trip Cancellation/Re-scheduling',
        'Lost/Delayed Baggage',
        'Personal Liability & Accident Cover'
      ]
    }
  };

  allPolicies = [
    { title: 'Car Insurance', slug: 'car' },
    { title: 'Life Insurance', slug: 'life' },
    { title: 'Health Insurance', slug: 'health' },
    { title: 'Home Insurance', slug: 'home' },
    { title: 'Business Insurance', slug: 'business' },
    { title: 'Travel Insurance', slug: 'travel' }
  ];


  openMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  closeMenuOnMobile() {
    if (window.innerWidth <= 1024) {
      this.isMenuOpen = false;
    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const type = params.get('type') || 'car';
      this.policy = this.policiesData[type] || this.policiesData['car'];
    });

  }
}

