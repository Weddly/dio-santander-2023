import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Pokedex Search</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'Services';
}
