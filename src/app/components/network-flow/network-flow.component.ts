import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';

interface NetworkFlow {
  id: string,
  label: string,
  imageUrl: string,
  imageAltText: string,
  details?: any
}

interface endNode {
  id: string,
  label: string,
  imageUrl: string,
  imageAltText: string,
  ip: string,
  details?: any
}

interface SignalFlow {
  id: string,
  label: string,
  status: string,
  imageUrl: string,
  imageAltText: string
}

@Component({
  selector: 'app-network-flow',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './network-flow.component.html',
  styleUrl: './network-flow.component.scss'
})

export class NetworkFlowComponent {

  hoverNode: endNode | null = null;
  midNode: NetworkFlow | null = null;
  sigNode: NetworkFlow | null = null;

  sourceNode: NetworkFlow[] =
    [
      {
      id: 'first-node',
      label: 'Loremipsumm',
      imageUrl: 'purple-user.svg',
      imageAltText: 'Firewall Icon',
      details: {
        title: 'Lorem Ipsum Dolor Sit',
        rows: [
          { text1: '1.2.3.4',  text2: '1.2.3.4',  text3: '1.2.3.4'},
          { text4: '1.2.3.4',  text5: '1.2.3.4',  text6: '1.2.3.4'}
        ]
      }
    }
    ]


  middleNode: NetworkFlow[] = [
    {
      id: 'second-node',
      label: 'Loremipsumm',
      imageUrl: 'oad-balancer.svg',
      imageAltText: 'Firewall Icon',
      details: {
        title: 'Loremipsu',
        rows: [
          { icon: 'hover-doc.svg', text1: 'Lorem:', text2: 'Loremipsum Loremipsum', text3: '1.2.3.4' },
          { text4: '1.2.3.4', text5: 'Loremipsum', text6: '1.2.3.4', text7: '1.2.3.4' }
        ]
      }
    },
    {
      id: 'third-node',
      label: 'Loremipsu',
      imageUrl: 'oad-balancer.svg',
      imageAltText: 'Server Icon',
      details: {
        title: 'Loremipsu',
        rows: [
          { icon: 'hover-doc.svg', text1: 'Lorem:', text2: 'Loremipsum Loremipsum', text3: '1.2.3.4' },
          { text4: '1.2.3.4', text5: 'Loremipsum', text6: '1.2.3.4', text7: '1.2.3.4' }
        ]
      }
    },
  ]

  endNodes: endNode[] = [
    {
      id: 'fourth-node',
      ip: '192.168.1.1',
      label: 'Loremipsumdolorsit',
      imageUrl: 'red-stack.svg',
      imageAltText: 'Server Icon',
      details: {
        title: 'Loremipsumdolorsit',
        subtitle: '192.168.1.1',

        rows: [
          { icon: 'hover-doc.svg', text1: 'Lorem:', text2: 'Lorem “ipsum"' },
          { text3: 'Loremipsum', text4: 'lorem 1234,5678' }
        ]
      }
    },
    {
      id: 'end2',
      ip: '192.168.1.2',
      label: 'Loremipsumdolorsit002',
      imageUrl: 'red-stack.svg',
      imageAltText: 'Server Icon',
      details: {
        title: 'Loremipsumdolorsit',
        subtitle: '192.168.1.1',
        rows: [
          { icon: 'hover-doc.svg', text1: 'Lorem:', text2: 'Lorem “ipsum"' },
          { text3: 'Loremipsum', text4: 'lorem 1234,5678' }
        ]
      }
    }
  ]


  statusNode: SignalFlow[] = [
    {
      id: 'status1',
      label: 'Lorem',
      imageUrl: 'red-shield.svg',
      imageAltText: 'Danger',
      status: 'danger'
    },
    {
      id: 'status2',
      label: 'Lorem',
      imageUrl: 'yellow-shield.svg',
      imageAltText: 'Warning',
      status: 'warning'
    },
    {
      id: 'status3',
      label: 'Lorem',
      imageUrl: 'green-shield.svg',
      imageAltText: 'Success',
      status: 'success'
    }
  ]
  node: any;

}