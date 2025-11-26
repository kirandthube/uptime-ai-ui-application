import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable()
export class HeatmapService {

  constructor(private http:HttpClient) { }

 getHeatmapData(year: number): Observable<any> {
  return this.http.get<any>('../assets/heatmap.json')
    .pipe(
      map(data => data[year])
    );
}

getContributionStats(): Observable<any> {
  return this.http.get<any>('../assets/contribution-stats.json');
}

}
