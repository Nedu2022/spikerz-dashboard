import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface NetworkFlow {
  id: string;
  label: string;
  ip?: string;
  type: | 'danger' | 'info' | 'warning' | 'success';
  imageUrl?: string;
  imageAltText?: string;
  color?: string; 
}

@Component({
  selector: 'app-network-flow',
  standalone: true,               
  imports: [NgFor, NgIf],
  templateUrl: './network-flow.component.html',
  styleUrls: ['./network-flow.component.scss']
})
export class NetworkFlowComponent {
  private readonly typeColors: Record<NetworkFlow['type'], string> = {
    danger:  '#E5372B',
    warning: '#F59E0B',
    success: '#16A34A',
    info:    '#3B82F6',
  };

  getColorByType(type: NetworkFlow['type']): string {
    return this.typeColors[type] ?? '#000000';
  }

  sourceNode: NetworkFlow = {
    id: 'fw-node',
    label: 'Loremipsumm',
    type: 'danger',
    imageUrl: 'assets/purple-user.svg',
    imageAltText: 'Firewall Icon'
  };

  middleNode: NetworkFlow[] = [
    {
      id: 'middle1',
      label: 'Loremipsu',
      type: 'info',
      imageUrl: 'assets/oad-balancer.svg',
      imageAltText: 'Server Icon'
    },
    {
      id: 'middle2',
      label: 'Loremipsu',
      type: 'info',
      imageUrl: 'assets/oad-balancer.svg',
      imageAltText: 'Server Icon'
    }
  ];

  endFlows: NetworkFlow[] = [
    {
      id: 'end1',
      label: 'Loremipsumdolorsit',
      ip: '192.168.1.1',
      type: 'danger',
      imageUrl: 'assets/red-stack.svg',
      imageAltText: 'Server Icon'
    },
    {
      id: 'end2',
      label: 'Loremipsumdolorsit002',
      ip: '192.168.1.2',
      type: 'danger',
      imageUrl: 'assets/red-stack.svg',
      imageAltText: 'Server Icon'
    }
  ];

  statusNodes: NetworkFlow[] = [
    {
      id: 'status1',
      label: 'Lorem',
      type: 'danger',
      imageUrl: 'assets/red-shield.svg',
      imageAltText: 'Danger',
      color: '#E5372B'
    },
    {
      id: 'status2',
      label: 'Lorem',
      type: 'warning',
      imageUrl: 'assets/yellow-shield.svg',
      imageAltText: 'Warning'
    },
    {
      id: 'status3',
      label: 'Lorem',
      type: 'success',
      imageUrl: 'assets/green-shield.svg',
      imageAltText: 'Success'
    }
  ];
}
