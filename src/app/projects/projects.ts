import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardScale } from "../directives/card-scale";
import { BtnHover } from '../directives/btn-hover';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardScale ,BtnHover,CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
 projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce web app built with ASP .NET Core MVC Pattern',
      image: 'assets/images/medra.png',
      link: 'https://medraagro.runasp.net'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio to showcase my skills and projects using Angular',
      image: 'assets/images/Personal-Portfolio .jpg',
      link: '#'
    },
    {
      title: 'Fairy Tale Bags store',
      description: 'A e-commerce bags store using Angular & .Net Api',
      image: 'assets/images/Fairy-Tale.png',
      link: 'https://mohamedelekhnawy.github.io/Fairy_Tale_Ecommerce'
    }
  ];
}
