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
  stroke: string
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
  { status: 'Critical', count: 2, stroke: '#e03131' },
  { status: 'High', count: 3, stroke: '#f76707' },
  { status: 'Medium', count: 2, stroke:'#fab005' },
  { status: 'Low', count: 0, stroke: '#37b24d' }
];

circleColor: string = '#e03131'; 
maxDashOffset = 276.46;
circleValue: number = 0;

get totalRisks(): number {
  return this.riskSummary.reduce((sum, risk) => sum + risk.count, 0);
}

ngAfterViewInit(): void {
  this.updateCircle(this.totalRisks, this.circleColor);
}

setCircleColor(risk: RiskSummary) {
  this.updateCircle(risk.count, risk.stroke);
}

resetCircleColor() {
  this.updateCircle(this.totalRisks, '#e03131');
}

updateCircle(count: number, stroke: string) {
  const dashOffset = count > 0 
    ? this.maxDashOffset * (1 - count / 10)
    : this.maxDashOffset;

  requestAnimationFrame(() => {
    this.circle.nativeElement.style.strokeDashoffset = dashOffset.toString();
    this.circleColor = stroke;
    this.circleValue = count; 
  });
}



}
