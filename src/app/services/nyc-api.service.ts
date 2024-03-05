import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJobList } from '../models/IJobList.type';

@Injectable({
  providedIn: 'root',
})
export class NycAPIService {
  http = inject(HttpClient);

  private apiUrl = 'https://data.cityofnewyork.us/resource/kpav-sd4t.json';

  constructor() {}

  // FETCH DATA
  // public getJobListings(): Observable<any[]> {
  //   return this.http.get<IJobList[]>(this.apiUrl);
  // }

  // FETCH DATA FILTER 7 MAX POST
  public getJobListings(): Observable<IJobList[]> {
    const limit = 7;
    const urlWithLimit = `${this.apiUrl}?$limit=${limit}`;
    return this.http.get<IJobList[]>(urlWithLimit);
  }
}
