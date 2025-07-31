// info-panel.component.ts
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface ServerItem {
  title: string;
  name: string;
  subtitle: string;
  description: string;
  iconUrl: string;
  isExpanded?: boolean;
  expandedContent?: string;
}

@Component({
  selector: 'app-info-panel',
  imports: [NgFor, NgIf],
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanel {
  descriptionText = `Lorem Ipsum Dolor Sit Amet Consectetur, Aenean Sodales Pellentesque Gravida Nibh Et Magna Faucibus. Dui Commodo Ut Metus Amet Egestas Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla Som Pellentesque. Sit In Vel Sed Cursus Metus Sit Fingilla Vestibulum.`;

  extraText = `Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet mauris gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.`;

  infoItems = [
    {label: 'Lorem Ipsum Dolor', value:'10/19/2017'},
    {label: 'Lorem Ipsum Dolor', value: 'Ut'},
    {label: 'Lorem Ipsum Dolor', value: 'Eros'},
    {label: 'Lorem Ipsum Dolor', value: 'Yes', isSuccess: true},
    {label: 'Lorem Ipsum Dolor', value: 'Sit'},
    {label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor'},
    {label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor'},
  ];

  // Server list data
  mainTitle = 'Lorem Ipsum Dolor Sit';
  
  servers: ServerItem[] = [
    {
      title: 'Lorem P',
      name: 'Server',
      subtitle: 'Server',
      description: 'Lorem Ipsum Dolor Sit\nAmet Consectetur.',
      iconUrl: 'assets/oad-balancer.svg',
      isExpanded: false,
      expandedContent: 'Lorem Ipsum Dolor Sit Amet Consectetur, Nunc Vitae Tortor Convallis Vitae Arcu. Magna.'
    },
    {
      title: 'Lorem S',
      name: 'Server',
      subtitle: 'Server',
      description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
      iconUrl: 'assets/oad-balancer.svg',
      isExpanded: false,
      expandedContent: 'Lorem Ipsum Dolor Sit Amet Consectetur. Quis Viverra Etiam Pellentesque Lectus Semper In Massa Purus. Auctor Aenean Aenean Senectus Massa Dignissim Vehicula Mi Erat Purus. Praesent Scelerisque Aliquet Metus Sagittis Dictum Sed Sed. Sed Venenatis Sed Urna Quam.'
    },
    {
      title: 'Lorem T',
      name: 'Server',
      subtitle: 'Server',
      description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
      iconUrl: 'assets/oad-balancer.svg',
      isExpanded: false
    }
  ];
  
  additionalText = 'Lorem Ipsum Dolor Sit Amet Consectetur, Nunc Vitae Tortor Convallis Vitae Arcu. Magna.';

  toggleServer(index: number) {
    this.servers[index].isExpanded = !this.servers[index].isExpanded;
  }
}