import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap, catchError, pluck } from 'rxjs/operators';
import { APULocation, APULocations } from './interfaces/locations';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://api.apiit.edu.my/transix/locations';

  constructor(private http: HttpClient) {}

  //TODO Understand what is happenning here and understand why <location> have an error, goes for: getLocations(), getLocation(), handleError
  getLocations(): Observable<APULocation[]> {
    return this.http.get<APULocations>(this.apiUrl).pipe(pluck('locations'));
  }
}
