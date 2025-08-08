import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgClass, NgFor } from '@angular/common';

interface RiskSummary {
  status: string,
  count: number,
}

@Component({
  selector: 'app-context-risk',
  standalone: true,
  templateUrl: './context-risk.component.html',
  styleUrls: ['./context-risk.component.scss'],
  imports: [MatProgressSpinnerModule, NgFor, NgClass],
})

export class ContextRiskComponent {

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