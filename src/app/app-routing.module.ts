import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path: 'github', loadChildren: () => import('../app/github-ui/github-ui.module').then(m => m.GithubUiModule) },
   {path:"",redirectTo:"github",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
