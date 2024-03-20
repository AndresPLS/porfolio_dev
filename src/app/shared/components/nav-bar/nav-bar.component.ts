import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  activeRoute = inject(ActivatedRoute);


  ngOnInit() {
    this.activeRoute.fragment.subscribe((data) => {
      //console.log(data);
      this.JumpToSection(data);
    });


  }

  JumpToSection(section: any) {
    document.getElementById(section)!.scrollIntoView({ behavior: 'smooth' });
  }

}
