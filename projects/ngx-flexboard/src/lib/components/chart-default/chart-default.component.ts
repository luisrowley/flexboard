import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chart } from 'chart.js';
import { doughnutData, lineChartData, pieChartData } from './chart.mock';
import { registerComponent } from '../../helpers/component.registry';

@registerComponent
@Component({
  selector: 'lib-chart-default',
  templateUrl: './chart-default.component.html',
  styleUrls: ['./chart-default.component.css']
})
export class ChartDefaultComponent implements OnInit {

/**
   * ChartJS Object
   * @var {any} chart
   */
  public chart: any;
  // canvas element ref
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  // local asynchronous chart config data
  private _mode = new BehaviorSubject<any>({});
  // chart mode setter input property
  @Input() set mode(data: any){
      this._mode.next(data);
  };
  // chart mode getter
  get mode(){
    return this._mode.getValue();
  }

  constructor(private changeDetector: ChangeDetectorRef) { }

  /**
   * On component initialization
   */
  ngOnInit(): void {
    
  }

  ngAfterViewInit()
  {
    this._mode.subscribe( mode => {

      const uuid = this.canvas.nativeElement.getContext('2d');
    
      switch(mode.type)
      {
        case 'bar':
          this.renderBarChart(uuid);
          break;

        case 'lines':
          this.renderLinesChart(uuid);
          break;

        case 'pie':
          this.renderPieChart(uuid);
          break;

        case 'doughnut':
          this.renderDoughnutChart(uuid);
          break;

        default:
          this.renderBarChart(uuid);
          break;
      }
      // perform change detection for component props
      this.changeDetector.detectChanges(); 
    });
  }

  private renderBarChart(uuid: string)
  {
    this.chart = new Chart(uuid, {
      type: 'bar',
      data: {
          labels: ['jpg', 'png', 'gif', 'tiff', 'psd', 'bpm'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.8)',
                  'rgba(153, 102, 255, 0.8)',
                  'rgba(255, 159, 64, 0.8)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
    
  }

  private renderLinesChart(uuid: string)
  {
    this.chart = new Chart(uuid, {
      type: 'line',
      data: lineChartData,
      options: {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        title: {
          display: false,
          text: 'Cargas'
        },
        scales: {
          yAxes: [{
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: 'left',
            id: 'y-axis-1',
          }, {
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: 'right',
            id: 'y-axis-2',

            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          }],
        }
      }
    });    
  }

  private renderPieChart(uuid: string)
  {
    new Chart(uuid, {
			type: 'pie',
			data: pieChartData,
			options: {
        responsive: true,
        title: {
          display: false,
          text: 'Tareas'
        },
			}
		});  
  }

  private renderDoughnutChart(uuid: string)
  {
    new Chart(uuid, {
			type: 'doughnut',
			data: doughnutData,
			options: {
				responsive: true,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Carga'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		});  
  }
}
