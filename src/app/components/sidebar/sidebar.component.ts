import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

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
  imports: [NgClass, NgFor, NgIf],
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

  isMobileView = false;
  sidebarOpenOnMobile = false;

  constructor() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenWidth();
  }
  
  checkScreenWidth() {
    this.isMobileView = window.innerWidth <= 768;
    if (!this.isMobileView) {
      this.sidebarOpenOnMobile = false;
    }
  }

  toggleSidebar() {
    if (this.isMobileView) {
      this.sidebarOpenOnMobile = !this.sidebarOpenOnMobile;
    } else {
      this.sidebarToggle.emit();
    }
  }

  closeSidebar() {
    this.sidebarOpenOnMobile = false;
  }


  setActive(selectedItem: MenuItem) {
    this.menuItems.forEach(item => item.active = false);
    selectedItem.active = true;
    if (this.isMobileView) {
      this.sidebarOpenOnMobile = false;
    }
  }


}
