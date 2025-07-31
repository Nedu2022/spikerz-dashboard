import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar/sidebar.component';
import { InfoPanel } from '../info-panel/info-panel/info-panel.component';
import { NetworkFlowComponent } from '../network-flow/network-flow/network-flow.component';
import { RiskOverview } from '../risk-overview/risk-overview/risk-overview.component';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, InfoPanel, NetworkFlowComponent, RiskOverview],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class Layout {

}
