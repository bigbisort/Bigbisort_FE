import { Component, OnInit } from '@angular/core';



// Define a type/interface for the contact cards
interface ContactChannel {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonClass: string;
  route: string;
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
      // 🎯 CHANGE THE ICON STRING HERE 
      //icon: 'assets/images/ContactUs/plant.png',
      icon: 'yard',
      title: 'Buyer Enquiry',
      description: 'Get quotations, check availability, logistics details.',
      buttonText: 'Send Enquiry',
      buttonClass: 'buyer',
      route: '/contact/buyer'
    },
    {
     
      //icon: 'assets/images/ContactUs/plant.png',
       icon: 'globe',
      title: 'Farmer Support',
      description: 'Get listed, update your product data, or ask for help.',
      buttonText: 'Contact Team',
      buttonClass: 'farmer', // Renamed for better class-to-card mapping
      route: '/contact/farmer' 
    },
 
    {
      // icon: 'assets/images/ContactUs/plant.png',
       icon: 'handshake',
      title: 'Partnerships',
      description: 'Join hands to scale India\'s export network.',
      buttonText: 'Partner with Us',
      buttonClass: 'partner', // Renamed for better class-to-card mapping
      route: '/contact/partner' 
    },
    {
      icon: 'robot',
      title: 'Tech / AI Support',
      description: 'Facing issues with DeepSeek chat or login?',
      buttonText: 'Chat with Support',
      buttonClass: 'tech', // Renamed for better class-to-card mapping
      route: '/support/chat' 
    }
  ];
  constructor() { }


  contactData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact Form Submitted:', this.contactData);

    // ✅ Later, you can send this to your backend:
    // this.http.post('http://localhost:8081/bigbisort-imp-exp/contact', this.contactData).subscribe(...);

    alert('Thank you for contacting us, ' + this.contactData.name + '!');
    this.contactData = { name: '', email: '', message: '' }; // reset form
  }




  aiFeatures: string[] = [
  "24×7 Instant Assistance",
  "Product Suggestions for Buyers",
  "Export Regulation Guidance",
  "Farmer Listing Support"
];

// Add these properties to your existing component's class (e.g., ProductsComponent or a new component).
loggedInBuyerFeatures: string[] = [
  "Secure",
  "Instant",
  "Personalized"
];

// If you want to list the tags with their own text (for flexibility)
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
