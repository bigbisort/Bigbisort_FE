import { Component, OnInit } from '@angular/core';

interface RegionalTeam {
  region: string;
  focus: string;
}

interface Fact {
  icon: string;
  value: string;
  label: string;
}

interface Value {
  icon: string;
  title: string;
  text: string;
}

interface Step {
  icon: string;
  text: string;
}

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss'],
    standalone: false
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  // Same four desks referenced on the Contact page — kept in one place
  // here so this claim is backed by real, consistent data.
  regionalTeams: RegionalTeam[] = [
    { region: 'Shimla, HP', focus: 'Apple Exports' },
    { region: 'Srinagar, J&K', focus: 'Premium Fruits' },
    { region: 'Coimbatore, TN', focus: 'Logistics & South Ops' },
    { region: 'Chennai (HQ)', focus: 'Corporate & Investor Desk' }
  ];

  // Everything here restates what the page already says (founded 2024, four desks, direct B2B).
  facts: Fact[] = [
    { icon: 'bi-calendar-event', value: '2024', label: 'Year founded' },
    { icon: 'bi-geo-alt', value: '4', label: 'Regional desks' },
    { icon: 'bi-diagram-3', value: 'Direct', label: 'Farmer-to-buyer B2B' },
    { icon: 'bi-globe-central-south-asia', value: 'India → World', label: 'Export reach' }
  ];

  values: Value[] = [
    { icon: 'bi-shield-check', title: 'Trust', text: 'Integrity and reliability form our foundation.' },
    { icon: 'bi-journal-text', title: 'Transparency', text: 'Open communication with all stakeholders.' },
    { icon: 'bi-globe2', title: 'Global Trade', text: 'Bridges connecting Indian farms to the world.' },
    { icon: 'bi-lightbulb', title: 'Innovation', text: 'Constantly evolving to meet market needs.' }
  ];

  steps: Step[] = [
    { icon: 'bi-flower2', text: 'Farmers showcase their crops before harvest on Bigbisort' },
    { icon: 'bi-cart-check', text: 'Global buyers select quality produce directly from farmers' },
    { icon: 'bi-truck', text: 'Our export team supports with logistics & regulations' },
    { icon: 'bi-cash-coin', text: 'Shared profit benefits the farming community' }
  ];

  ngOnInit(): void {
  }

}
