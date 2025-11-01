import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { Header } from '../header/header';
import { BtnHover } from '../directives/btn-hover';
import { Info } from '../info/info';
import { ProjectSection } from '../project-section/project-section';


@Component({
  selector: 'app-home',
  imports: [Header,Info,ProjectSection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
