import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

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
  imports: [NgClass, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  menuItems: MenuItem[] =[
    {
      icon: '/dashboard.svg',
      label: 'Lorem1',
      active: false
    },
        {
      icon: '/alert.svg',
      label: 'Lorem',
        active: false
    },
        {
      icon: '/package.svg',
      label: 'Lorem',
        active: false
    },
        {
      icon: '/arrow.svg',
      label: 'Lorem',
        active: true
    },
        {
      icon: '/connection.svg',
      label: 'Lorem',
        active: false
    },
        {
      icon: '/document.svg',
      label: 'Lorem',
        active: false
    },
        {
      icon: '/last-menu.svg',
      label: 'Lorem',
        active: false
    }
  ];


  bottomItems: BottomItem[] = [
        {
      icon: '/settings.svg',
      label: 'Lorem123'
    },
        {
      icon: '/notifi.svg',
      label: 'Lorem'
    },
  ];

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  setActive(selectedItem: MenuItem) {
    this.menuItems.forEach(item => item.active = false);
    selectedItem.active = true;
  }


}
