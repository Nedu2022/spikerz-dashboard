import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface RiskAsset {
  name: string;
  ip: string;
  contextualRisk: 'Critical' | 'High' | 'Medium' | 'Low';
}

interface RiskSummary {
  critical: number;
  high: number;
  medium: number;
  low: number;
  total: number;
}


@Component({
  selector: 'app-risk-overview',
  imports: [NgFor],
  templateUrl: './risk-overview.component.html',
  styleUrls: ['./risk-overview.component.scss'],
  standalone: true,
})

export class RiskOverview {
assets: RiskAsset[] = [
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', contextualRisk: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', contextualRisk: 'Critical' }
  ];

  riskSummary: RiskSummary = {
    critical: 2,
    high: 0,
    medium: 0,
    low: 0,
    total: 2
  };

  currentPage = 1;
  totalPages = 1;

  getRiskBadgeClass(risk: string): string {
    return `risk-badge ${risk.toLowerCase()}`;
  }

  previousPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
  }
