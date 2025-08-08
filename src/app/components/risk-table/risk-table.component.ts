import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgClass, NgFor } from '@angular/common';


interface RiskAsset {
  name: string;
  ip: string;
    contextualRisk: 'Critical';
}

interface RiskSummary {
  status: string,
  count: number,
}

@Component({
  selector: 'app-risk-table',
  imports: [MatProgressSpinnerModule, NgFor, NgClass],
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

    riskSummary: RiskSummary[] = [
    { status: 'Critical', count: 2 },
    { status: 'High', count: 0 },
    { status: 'Medium', count: 0 },
    { status: 'Low', count: 0 },
  ];

  @ViewChild('circle') circle!: ElementRef<SVGCircleElement>;

ngAfterViewInit(): void {
  requestAnimationFrame(() => {
    this.circle.nativeElement.style.strokeDashoffset = '0';
  });
}

}
