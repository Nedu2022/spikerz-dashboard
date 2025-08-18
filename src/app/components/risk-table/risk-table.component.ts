import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
  styleUrls: ['./risk-table.component.scss'],
  standalone: true
})

export class RiskTableComponent implements AfterViewInit {


  assets: RiskAsset[] = [
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', contextualRisk: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', contextualRisk: 'Critical' },
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', contextualRisk: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', contextualRisk: 'Critical' }
  ];

  currentPage = 1;
  itemsPerPage = 2;
  totalPages = Math.ceil(this.assets.length / this.itemsPerPage);

  get paginatedAssets(): RiskAsset[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.assets.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getRiskBadgeClass(risk: string): string {
    return `risk-badge ${risk.toLowerCase()}`;
  }

  previousPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
@ViewChild('circle') circle!: ElementRef<SVGCircleElement>;

  riskSummary: RiskSummary[] = [
    { status: 'Critical', count: 2 },
    { status: 'High', count: 0 },
    { status: 'Medium', count: 0 },
    { status: 'Low', count: 0 }
  ];

  circleColor: string = ''; // Will be set to default in ngAfterViewInit

  get totalRisks(): number {
    return this.riskSummary.reduce((sum, risk) => sum + risk.count, 0);
  }

  ngAfterViewInit(): void {
    this.circleColor = this.getCircleColor(); // Set initial color

    const total = this.totalRisks;
    const maxDashOffset = 276.46; // Circle circumference
    const dashOffset = total > 0 ? maxDashOffset * (1 - total / 10) : maxDashOffset; // Proportional fill

    requestAnimationFrame(() => {
      this.circle.nativeElement.style.strokeDashoffset = dashOffset.toString();
    });
  }

  getCircleColor(): string {
    const critical = this.riskSummary.find(r => r.status === 'Critical')?.count || 0;
    const high = this.riskSummary.find(r => r.status === 'High')?.count || 0;
    const medium = this.riskSummary.find(r => r.status === 'Medium')?.count || 0;

    if (critical > 0) return '#e03131';
    if (high > 0) return '#f76707';
    if (medium > 0) return '#fab005';
    return '#37b24d';
  }

  setHoverColor(status: string): void {
    switch (status.toLowerCase()) {
      case 'critical':
        this.circleColor = '#e03131';
        break;
      case 'high':
        this.circleColor = '#f76707';
        break;
      case 'medium':
        this.circleColor = '#fab005';
        break;
      case 'low':
        this.circleColor = '#37b24d';
        break;
    }
  }

  resetColor(): void {
    this.circleColor = this.getCircleColor();
  }
}
