import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isLoggedIn(): Boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }
}
