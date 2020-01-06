import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { APULocation } from '../interfaces/locations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  locations$: Observable<APULocation[]>;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.locations$ = this.api.getLocations();
  }
}
