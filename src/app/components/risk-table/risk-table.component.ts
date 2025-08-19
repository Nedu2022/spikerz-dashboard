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
  color: string
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
    { status: 'Critical', count: 2, color: '#e03131' },
    { status: 'High', count: 0, color: '#f76707' },
    { status: 'Medium', count: 0, color:'#fab005' },
    { status: 'Low', count: 0, color: '#37b24d' }
  ];

  circleColor: string = ''; 
  get totalRisks(): number {
    return this.riskSummary.reduce((sum, risk) => sum + risk.count, 0);
  }

  ngAfterViewInit(): void {
    const total = this.totalRisks;
    const maxDashOffset = 276.46;
    const dashOffset = total > 0 ? maxDashOffset * (1 - total / 10) : maxDashOffset; 

    requestAnimationFrame(() => {
      this.circle.nativeElement.style.strokeDashoffset = dashOffset.toString();
    });
  }


}
