import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Ali.Physical.Module');
}
