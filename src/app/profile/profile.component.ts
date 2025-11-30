import { Component } from '@angular/core';

interface User {
  username: string;
  role: string;
  memberSince: string;
  accountType: string;
  status: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User = {
    username: 'JohnDoe',
    role: 'Administrator',
    memberSince: 'January 2025',
    accountType: 'Premium',
    status: 'Active'
  };

  isEditing: boolean = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    this.isEditing = false;
    
    console.log('Збережені дані:', this.user);
  }
}
