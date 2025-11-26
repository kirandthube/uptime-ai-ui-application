import { Component, OnInit } from '@angular/core';
import { OverviewDetailsService } from '../../services/overview-details.service';
import { GithubUser } from '../../models/user-profile.model';

@Component({
  selector: 'app-git-layout',
  templateUrl: './git-layout.component.html',
  styleUrls: ['./git-layout.component.css']
})
export class GitLayoutComponent implements OnInit{
protected activeTab: string = 'overview';
protected profileDetails!:GithubUser;

  constructor(private overviewDetailsService:OverviewDetailsService){
  }

 public ngOnInit(){
    this.overviewDetailsService.getProfileDetails().subscribe((res:GithubUser)=>{
      this.profileDetails = res;
    })
  }

 protected setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
