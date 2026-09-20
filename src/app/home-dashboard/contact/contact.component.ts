import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



// Define a type/interface for the contact cards
interface ContactChannel {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonClass: string;
}

interface RegionalContact {
  region: string;
  location: string; // Used for map pointers (e.g., coordinates or unique ID)
  focus: string;
  email: string;
}

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: false
})
export class ContactComponent implements OnInit {



contactChannels: ContactChannel[] = [
    {
      icon: 'inventory_2',
      title: 'Buyer Enquiry',
      description: 'Get quotations, check availability, and logistics details.',
      buttonText: 'Send Enquiry',
      buttonClass: 'buyer'
    },
    {
      icon: 'public',
      title: 'Farmer Support',
      description: 'Get listed, update your product data, or ask for help.',
      buttonText: 'Contact Team',
      buttonClass: 'farmer'
    }
  ];
  constructor(private route: ActivatedRoute, private auth: AuthService) { }

  // Every CTA on this page (hero buttons, channel cards, "Notify Me") opens the Send Enquiry
  // modal. The topic isn't shown in the modal, but is sent with the enquiry so the team
  // email says what the visitor clicked ("Regarding: Farmer Support").
  enquiryOpen = false;
  selectedTopic = 'General Enquiry';

  openEnquiry(topic: string = 'General Enquiry') {
    this.selectedTopic = topic;
    this.enquiryOpen = true;
  }

  ngOnInit(): void {
    // Arriving from a product's "Enquire" button (?topic=...) — open the modal straight away.
    const topic = this.route.snapshot.queryParamMap.get('topic');
    if (topic) {
      this.openEnquiry(topic);
    }
  }






loggedInBuyerTags: { text: string, color: string }[] = [
  { text: "SECURE", color: "yellow" },
  { text: "INSTANT", color: "yellow" },
  { text: "PERSONALIZED", color: "yellow" }
];



regionalTeams: RegionalContact[] = [
  {
    region: 'Shimla, HP',
    location: 'shimla', // Used for map pin placement
    focus: 'Apple Exports',
    email: 'hp@bigbisort.com'
  },
  {
    region: 'Srinagar, J&K',
    location: 'srinagar',
    focus: 'Premium Fruits',
    email: 'jk@bigbisort.com'
  },
  {
    region: 'Coimbatore, TN',
    location: 'coimbatore',
    focus: 'Logistics & South Ops',
    email: 'south@bigbisort.com'
  },
  {
    region: 'Chennai (HQ)',
    location: 'chennai',
    focus: 'Corporate & Investor Desk',
    email: 'contact@bigbisort.com'
  }
];


}
