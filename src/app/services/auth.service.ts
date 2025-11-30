import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface User {
  username: string;
  role?: string;
  memberSince?: string;
  accountType?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_KEY = 'isAuthenticated';
  private readonly USER_KEY = 'currentUser';

  private authState = new BehaviorSubject<boolean>(this.isAuthenticated());
  authState$ = this.authState.asObservable();

  private currentUserSubject = new BehaviorSubject<User | null>(this.getCurrentUser());
  currentUser$ = this.currentUserSubject.asObservable();

  private users: User[] = [
    { username: 'Admin', role: 'Administrator', memberSince: 'January 2025', accountType: 'Premium', status: 'Active' },
    { username: 'User1', role: 'User', memberSince: 'March 2025', accountType: 'Standard', status: 'Active' },
    { username: 'User2', role: 'User', memberSince: 'April 2025', accountType: 'Standard', status: 'Active' }
  ];

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && password === '12345');
    if (user) {
      localStorage.setItem(this.AUTH_KEY, 'true');
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      this.authState.next(true);
      this.currentUserSubject.next(user);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.authState.next(false);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.AUTH_KEY) === 'true';
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  setCurrentUser(user: User) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user?.role === role;
  }

  getAllUsers(): User[] {
    return this.users.map(u => ({ ...u }));
  }
}
