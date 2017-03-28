import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: `jumbotron.component.html`
})
export class JumbotronComponent {
  private jumbotronHeading: string;
  private jumbotronText: string;
  private jumbotronbtnText: string;
  private jumbotronbtnUrl: string;

  constructor() {
    this.jumbotronHeading = "Jumbotron heading";
    this.jumbotronText = "The latest Angular release is 4.0. Learn about the latest updates to the documentation. View the Angular change log for enhancements, fixes, and breaking changes in Angular itself.";
    this.jumbotronbtnText = "Read More";
    this.jumbotronbtnUrl = "/about";
  }
}
