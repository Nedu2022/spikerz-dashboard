import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-description-tab',
  imports: [NgFor, MatExpansionModule],
  templateUrl: './description-tab.component.html',
  styleUrl: './description-tab.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionTabComponent {
  readonly panelOpenState = signal(false);

  descriptionText = `Lorem Ipsum Dolor Sit Amet Consectetur, Aenean Sodales Pellentesque Gravida Nibh Et Magna Faucibus. Dui Commodo Ut Metus Amet Egestas Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla Som Pellentesque. Sit In Vel Sed Cursus Metus Sit Fingilla Vestibulum.`;

  extraText = `Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet mauris gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.`;

  infoItems = [
    {
      title: 'Lorem Ipsum Dolor',
      description: '10/19/2017'
    },
    {
      title: 'Lorem Ipsum Dolor',
      description: 'Ut'
    },
    {
      title: 'Lorem Ipsum Dolor',
      description: 'Yes',
      icon: 'check'
    },
    {
      title: 'Lorem Ipsum Dolor',
      description: 'Sit'
    },
    {
      title: 'Lorem Ipsum Dolor',
      description: 'Lorem Ipsum Dolor',
    },
    {
      title: 'Lorem Ipsum Dolor',
      description: 'Lorem Ipsum Dolor',
    }
  ];

  mainTitle = 'Lorem Ipsum Dolor Sit';

  servers = [
    {
      title: 'Lorem P',
      name: 'Server',
      subtitle: 'server',
      description: 'Lorem Ipsum Dolor Sit\nAmet Consectetur.',
      iconUrl: 'oad-balancer.svg',
      expandedContent: 'Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.'
    },
        {
      title: 'Lorem P',
      name: 'Server',
      subtitle: 'server',
      description: 'Lorem Ipsum Dolor Sit\nAmet Consectetur.',
      iconUrl: 'oad-balancer.svg',
      expandedContent: 'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.'
    },
        {
      title: 'Lorem P',
      name: 'Server',
      subtitle: 'server',
      description: 'Lorem Ipsum Dolor Sit\nAmet Consectetur.',
      iconUrl: 'oad-balancer.svg',
      expandedContent: 'Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.'
    }
  ]

}
