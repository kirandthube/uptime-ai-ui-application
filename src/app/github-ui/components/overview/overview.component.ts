import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OverviewDetailsService } from '../../services/overview-details.service';
import { HeatmapService } from '../../services/hieatmap.service';
import Plotly from 'plotly.js-dist-min';
import { GithubUser } from '../../models/user-profile.model';
import { Course } from '../../models/repo-details.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit,AfterViewInit {
protected profileDetails!:GithubUser;
protected repoDetails!:Course[];
protected yearList = [2025, 2024, 2023, 2022, 2021, 2020];
protected selectedYear = 2025;

  constructor(private overviewDetailsService:OverviewDetailsService,
              private heatmapService:HeatmapService
  ){

  }

 public ngOnInit(){
  this.getProfile();
  this.getRepositories();
  }

 protected getProfile(){
    this.overviewDetailsService.getProfileDetails().subscribe((res:GithubUser)=>{
    this.profileDetails = res;
  })
  }

  protected  getRepositories(){
    this.overviewDetailsService.getRepoDetails().subscribe((res:Course[])=>{
    this.repoDetails = res;
  })
  }

 public  ngAfterViewInit(): void {
    this.loadHeatmap(this.selectedYear);
  }

 protected  onYearChange(year: number) {
    this.selectedYear = year;
    this.loadHeatmap(year);
  }

 private loadHeatmap(year: number) {
    this.heatmapService.getHeatmapData(year).subscribe(data => {
      

      const layout = {
        width: 750,
        height: 280, 
        margin: { t: 30, b: 20, l: 50, r: 20 },
        xaxis: { side: 'top', ticks: '', showgrid: false, zeroline: false },
        yaxis: { showgrid: false, ticks: '', autorange: 'reversed' }
      };

      Plotly.newPlot('heatmap', [{
        z: data.z,
        x: data.x,
        y: data.y,
        type: 'heatmap',
        colorscale: data.colorscale,
        showscale: false,
        xgap: 2,
        ygap: 2
      }], layout);
    });
  }

}
