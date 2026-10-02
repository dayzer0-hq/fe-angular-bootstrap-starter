import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="min-vh-100 d-flex align-items-center justify-content-center bg-dark text-light p-4">
      <div class="card bg-secondary-subtle text-dark shadow-lg border-0 rounded-4" style="max-width: 28rem;">
        <div class="card-body text-center p-5">
          <span class="badge rounded-pill text-bg-primary mb-3">Angular + Bootstrap</span>
          <h1 class="h3 mb-2">{{ title }}</h1>
          <p class="text-body-secondary mb-4">
            Standalone components, styled with Bootstrap 5 utility classes and components.
          </p>
          <button type="button" class="btn btn-primary px-4" (click)="clicks = clicks + 1">
            Clicked {{ clicks }}×
          </button>
        </div>
      </div>
    </main>
  `,
})
export class AppComponent {
  title = 'It runs 🎉';
  clicks = 0;
}
