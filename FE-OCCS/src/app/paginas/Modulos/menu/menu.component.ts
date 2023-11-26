import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
}
