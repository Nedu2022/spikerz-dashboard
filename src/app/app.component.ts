import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardContentComponent } from "./components/dashboard-content/dashboard-content.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardContentComponent, SidebarComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 isSidebarCollapsed = false;

 onSidebarToggle() {
  this.isSidebarCollapsed = !this.isSidebarCollapsed;
 }
}
