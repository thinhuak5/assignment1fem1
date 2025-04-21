import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName: string = '';
  userAvatar: string = '';
  showMenu: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') || '';
    this.userAvatar = localStorage.getItem('userAvatar') || '';
    console.log('Avatar:', this.userAvatar);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
