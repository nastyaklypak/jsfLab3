import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  currentUser: User | null = null;
  allUsers: User[] = [];

  constructor(public authService: AuthService, private router: Router) {
  
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

   
    this.allUsers = this.authService.getAllUsers();
  }

  logout(): void {
    this.authService.logout();
  }

  switchUser(username: string) {
    const user = this.allUsers.find(u => u.username === username);
    if (user) {
      this.authService.setCurrentUser(user);
      this.router.navigate(['/profile']); 
    }
  }
}
