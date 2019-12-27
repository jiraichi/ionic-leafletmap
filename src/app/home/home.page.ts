import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

import { ApiService } from '../api.service';
import { APULocation } from '../interfaces/locations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  map: Map;
  locations$: Observable<APULocation[]>;

  // LEAFLET MAP
  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new Map('mapId').setView([3.036376, 101.707362], 18);
    tileLayer(
      'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: 'edupala.com © ionic LeafLet'
      }
    ).addTo(this.map);
    marker([3.036376, 101.707362])
      .addTo(this.map)
      .bindPopup('Academia')
      .openPopup();
  }

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.locations$ = this.api.getLocations();
  }
}
