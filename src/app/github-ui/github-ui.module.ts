import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubUiRoutingModule } from './github-ui-routing.module';
import { GitLayoutComponent } from './components/git-layout/git-layout.component';
import { OverviewComponent } from './components/overview/overview.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewDetailsService } from './services/overview-details.service';
import { HeatmapService } from './services/hieatmap.service';
import { ContributionsRadarComponent } from './components/contributions-radar/contributions-radar.component';


@NgModule({
  declarations: [
    GitLayoutComponent,
    OverviewComponent,
    ContributionsRadarComponent
  ],
  imports: [
    CommonModule,
    GithubUiRoutingModule,
    HttpClientModule
  ],
  providers:[OverviewDetailsService,HeatmapService]
})
export class GithubUiModule { }
