import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly navItems: { name: string; route: string; icon: string }[] = [
    { name: 'Home', route: '/home', icon: 'heroHome' },
    { name: 'Experience', route: '/experience', icon: 'heroBriefcase' },
    { name: 'Skills', route: '/skills', icon: 'heroCodeBracketSquare' },
    { name: 'Projects', route: '/projects', icon: 'heroCodeBracketSquare' },
    { name: 'Learning', route: '/learning', icon: 'heroAcademicCap' },
    { name: 'Contact', route: '/contact', icon: 'heroEnvelope' },
  ];
  isOpen = signal(false);

  toggleMenu(): void {
    this.isOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isOpen.set(false);
  }
}
