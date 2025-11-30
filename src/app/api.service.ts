import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://jsflab5.onrender.com/api'; 

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  sendData(data: any) {
    return this.http.post(`${this.baseUrl}/data`, data);
  }

  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, { username, password });
  }
}
