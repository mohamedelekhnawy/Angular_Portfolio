import { Component, signal } from '@angular/core';
import { NavePar } from './nave-par/nave-par';
import { Footer } from './footer/footer';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavePar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');

    ngOnInit() {
    AOS.init({
      duration: 1000, 
      once: true     
    });
  }
}
