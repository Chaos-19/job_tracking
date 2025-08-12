import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables); // register all chart.js components

@Component({
  selector: 'app-chart-comp',
  imports: [],
  providers: [],
  templateUrl: './chart-comp.html',
  styleUrl: './chart-comp.css',
})
export class ChartComp implements AfterViewInit {
  @ViewChild('lineChart') lineChart!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Applications',
          data: [4, 6, 8, 12, 16, 24],
          borderColor: '#1E3A8A',
          backgroundColor: '#1E3A8A',
          tension: 0.4, // smooth curve
          fill: false,
          pointRadius: 5,
          pointBackgroundColor: '#1E3A8A',
          pointHoverRadius: 6,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'line',
      data,
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 6 } },
        },
      },
    };

    new Chart(this.lineChart.nativeElement, config);
  }
}
