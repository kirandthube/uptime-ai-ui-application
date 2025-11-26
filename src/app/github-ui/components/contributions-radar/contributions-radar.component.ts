import { Component } from '@angular/core';
import { HeatmapService } from '../../services/hieatmap.service';
import Plotly from 'plotly.js-dist-min';

@Component({
  selector: 'app-contributions-radar',
  templateUrl: './contributions-radar.component.html',
  styleUrls: ['./contributions-radar.component.css']
})
export class ContributionsRadarComponent {
constructor(private heatmapService: HeatmapService) {}

 public  ngAfterViewInit(): void {
    this.loadRadarChart();
  }

private   loadRadarChart() {
    this.heatmapService.getContributionStats().subscribe(res => {

      const values = [
        res.commits,
        res.issues,
        res.pullRequests,
        res.codeReview
      ];

      const labels = [
        'Commits',
        'Issues',
        'Pull requests',
        'Code review'
      ];

      const data: any = [{
        type: 'scatterpolar',
        r: values,
        theta: labels,
        fill: 'toself',
        name: 'Contributions',
        marker: { color: 'green' }
      }];

      const layout: any = {
        polar: {
          radialaxis: { visible: true, range: [0, 100] }
        },
        showlegend: false,
        margin: { t: 20, b: 20, l: 60,r: 60},
        width: 250,
        height: 250,
        right:100
      };

      Plotly.newPlot('radarChart', data, layout ,{responsive:true})
    });
  }
}
