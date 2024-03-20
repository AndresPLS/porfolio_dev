import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsHomeComponent } from '../projects-home/projects-home.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-home',
  standalone: true,
  imports: [HeroComponent, ContactComponent, SkillsComponent, ProjectsHomeComponent],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.css'
})
export class MainHomeComponent {




}
