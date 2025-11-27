import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { LoginPage } from './features/components/login-page/login-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'nutrition';
}
