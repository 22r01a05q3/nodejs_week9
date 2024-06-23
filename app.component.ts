import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports:[RouterOutlet,RouterModule,HeaderComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SPA_Exp9';
}
