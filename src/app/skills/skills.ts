import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardScale } from '../directives/card-scale';
import { BtnHover } from '../directives/btn-hover';


@Component({
  selector: 'app-skills',
  imports: [CommonModule,FormsModule,CardScale,BtnHover],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  selectedCategory: string = "All";
  skills = [
    { name: "Angular", category: "Frontend",stars:4 },
    { name: "HTML", category: "Frontend",stars:5 },
    { name: "CSS", category: "Frontend",stars:5 },
    { name: "Bootstrap", category: "Frontend",stars:5 },
    { name: "C#", category: "Backend",stars:4 },
    { name: "Mongo DB", category: "Backend",stars:4 },
    { name: ".NET Core", category: "Backend",stars:5},
    { name: "EF Core", category: "Backend",stars:4},
    { name: "Linqu", category: "Backend",stars:4},
    { name: "SQL", category: "Backend",stars:4 },
    { name: "Git", category: "Tools",stars:4 },
    { name: "Docker", category: "Tools",stars:3 }
  ];

  filteredSkills = this.skills;

  filterSkills() {
    this.filteredSkills =
      this.selectedCategory === "All"
        ? this.skills
        : this.skills.filter(s => s.category === this.selectedCategory);
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.filterSkills();
  }
}
