import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface RiskAsset {
  name: string;
  ip: string;
    contextualRisk: 'Critical';
}

@Component({
  selector: 'app-risk-table',
  imports: [NgFor],
  templateUrl: './risk-table.component.html',
  styleUrl: './risk-table.component.scss',
standalone: true
})

export class RiskTableComponent {
  assets: RiskAsset[] = [
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', contextualRisk: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', contextualRisk: 'Critical' }
  ];

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
