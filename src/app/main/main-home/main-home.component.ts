import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsHomeComponent } from '../projects-home/projects-home.component';

@Component({
  selector: 'main-home',
  standalone: true,
  imports: [HeroComponent, ContactComponent, SkillsComponent, ProjectsHomeComponent],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.css'
})
export class MainHomeComponent {

}
