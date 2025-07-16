import { Component, OnInit } from '@angular/core';
import { AppStateService } from './services/app.state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'desafio-final-senai-ford-enter';
  isMenuEnabled: boolean = false;

  constructor(private appStateService: AppStateService) {}

  ngOnInit(): void {
    this.appStateService.isMenuEnabled$.subscribe((enabled) => {
      this.isMenuEnabled = enabled;
    });
  }
}
