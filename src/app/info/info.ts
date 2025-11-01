import { Component } from '@angular/core';
import { CardScale } from '../directives/card-scale';
import { CardStyleDirective } from '../directives/card-style';
import { BtnHover } from '../directives/btn-hover';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info',
  imports: [CardScale,CardStyleDirective,BtnHover,CommonModule,FormsModule],
  templateUrl: './info.html',
  styleUrl: './info.css'
})
export class Info {
cards = [
  {
    title: "Frontend Development",
    description: "Crafting responsive and user-friendly interfaces with a focus on performance and usability.",
    icon: '<i class="fa-solid fa-code fa-3x text-dark"></i>',
    skills: ["Angular, TypeScript", "HTML5, CSS3, Bootstrap", "Responsive Design"]
  },
  {
    title: "Backend Development",
    description: "Building robust and scalable APIs and services that power modern applications.",
    icon: '<i class="fa-solid fa-server fa-3x text-dark"></i>',
    skills: ["ASP.NET Core / MVC", "Entity Framework Core", "REST APIs & Authentication", "SQL Server"]
  },
  {
    title: "Tools & Practices",
    description: "Leveraging modern tools and best practices to ensure efficient development and collaboration.",
    icon: '<i class="fa-solid fa-tools fa-3x text-dark"></i>',
    skills: ["Git & GitHub", "Agile & Scrum", "Unit Testing", "CI/CD Pipelines"]
  }
];

}
