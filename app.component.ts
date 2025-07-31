import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from "./layout/layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout],
  templateUrl: './app.component.html',
  styleUrls: ['../styles/styles.scss'],
})
export class App {
  protected title = 'risk-dashboard';
}
