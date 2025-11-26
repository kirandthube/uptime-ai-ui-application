import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubUser } from '../models/user-profile.model';
import { Course } from '../models/repo-details.model';

@Injectable()
export class OverviewDetailsService {

  private baseUrl = 'https://api.github.com/users/shreeramk';
  private repoUrl = '../assets/repo-details.json '
  constructor(private http: HttpClient) { }

  getProfileDetails(): Observable<GithubUser> {
    return this.http.get<GithubUser>(this.baseUrl);
  }

  getRepoDetails(): Observable<Course[]> {
    return this.http.get<Course[]>(this.repoUrl);
  }
}
