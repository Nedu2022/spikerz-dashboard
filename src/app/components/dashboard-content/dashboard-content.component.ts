import { Component } from '@angular/core';
import { DescriptionTabComponent } from "../description-tab/description-tab.component";
import { NetworkFlowComponent } from '../network-flow/network-flow.component';
import { RiskTableComponent } from '../risk-table/risk-table.component';

@Component({
  selector: 'app-dashboard-content',
  imports: [DescriptionTabComponent, NetworkFlowComponent, RiskTableComponent],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss',
  standalone: true,
})
export class DashboardContentComponent {

}
