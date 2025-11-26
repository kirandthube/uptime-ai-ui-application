import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitLayoutComponent } from './components/git-layout/git-layout.component';

const routes: Routes = [
  {path:"profile-details",component:GitLayoutComponent},
  {path:"",redirectTo:"profile-details",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubUiRoutingModule { }
