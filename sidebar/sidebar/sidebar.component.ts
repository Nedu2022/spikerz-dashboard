import { NgFor, NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

interface MenuItem {
  icon: string;
  label: string;
  active: boolean;
}

interface BottomItem {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [NgFor, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class Sidebar {
  isCollapsed = false;
  imageError = false;

  menuItems: MenuItem[] = [
    { icon: 'assets/dashboard.svg', label: 'Lorem', active: false },
    { icon: 'assets/alert.svg', label: 'Lorem', active: false },
    { icon: 'assets/package.svg', label: 'Lorem', active: false },
    { icon: 'assets/arrow.svg', label: 'Lorem', active: true },
    { icon: 'assets/connection.svg', label: 'Lorem', active: false },
    { icon: 'assets/document.svg', label: 'Lorem', active: false },
    { icon: 'assets/last-menu.svg', label: 'Lorem', active: false },
  ];

  bottomItems: BottomItem[] = [
    { icon: 'assets/settings.svg', label: 'Lorem' },
    { icon: 'assets/notifi.svg', label: 'Lorem' },
  ];

  toggleSidebar(event?: Event) {
    if (event) {
      event.stopPropagation(); // Prevent event bubbling
    }
    console.log('Toggle clicked! Current state:', this.isCollapsed); // Debug log
    this.isCollapsed = !this.isCollapsed;
    console.log('New state:', this.isCollapsed); // Debug log
  }

  expandIfCollapsed(event: Event) {
    // Only expand if clicking on the sidebar itself, not on buttons or links
    if (this.isCollapsed && event.target === event.currentTarget) {
      console.log('Expanding sidebar'); // Debug log
      this.isCollapsed = false;
    }
  }

  setActive(selectedItem: MenuItem) {
    // Reset all items to inactive
    this.menuItems.forEach(item => item.active = false);
    // Set the clicked item as active
    selectedItem.active = true;
  }

  onImageError(event: Event) {
    this.imageError = true;
  }
}