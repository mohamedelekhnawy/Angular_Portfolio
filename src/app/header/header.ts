import { Component } from '@angular/core';
import { BtnHover } from '../directives/btn-hover';
import AOS from 'aos';
@Component({
  selector: 'app-header',
  imports: [BtnHover],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
