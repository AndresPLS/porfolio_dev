import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
