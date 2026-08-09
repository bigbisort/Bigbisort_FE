import { Component, OnInit } from '@angular/core';



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
export class ContactComponent {



contactChannels: ContactChannel[] = [

    {
      icon: 'yard',
      title: 'Buyer Enquiry',
      description: 'Get quotations, check availability, logistics details.',
      buttonText: 'Send Enquiry',
      buttonClass: 'buyer'
    },
    {
      icon: 'globe',
      title: 'Farmer Support',
      description: 'Get listed, update your product data, or ask for help.',
      buttonText: 'Contact Team',
      buttonClass: 'farmer'
    },
    {
      icon: 'handshake',
      title: 'Partnerships',
      description: 'Join hands to scale India\'s export network.',
      buttonText: 'Partner with Us',
      buttonClass: 'partner'
    },
    {
      icon: 'robot',
      title: 'Tech / AI Support',
      description: 'Facing issues with DeepSeek chat or login?',
      buttonText: 'Chat with Support',
      buttonClass: 'tech'
    }
  ];
  constructor() { }

  // All four channel cards, the hero buttons, and the footer phone slot
  // route here — there is one real, working way to reach the team today,
  // and every CTA on the page points at it instead of a dead link.
  contactData = {
    topic: 'General Enquiry',
    name: '',
    email: '',
    message: ''
  };

  selectChannel(topic: string) {
    this.contactData.topic = topic;
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onSubmit() {
    console.log('Contact Form Submitted:', this.contactData);

    // ✅ Later, you can send this to your backend:
    // this.http.post('http://localhost:8081/bigbisort-imp-exp/contact', this.contactData).subscribe(...);

    alert('Thank you for contacting us, ' + this.contactData.name + '! We\'ll get back to you shortly.');
    this.contactData = { topic: 'General Enquiry', name: '', email: '', message: '' };
  }




  aiFeatures: string[] = [
  "24×7 Instant Assistance",
  "Product Suggestions for Buyers",
  "Export Regulation Guidance",
  "Farmer Listing Support"
];

loggedInBuyerFeatures: string[] = [
  "Secure",
  "Instant",
  "Personalized"
];

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
