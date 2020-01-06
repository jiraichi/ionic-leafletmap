import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

import { ApiService } from '../api.service';
import { APULocation } from '../interfaces/locations';

@Component({
  selector: 'app-apumap',
  templateUrl: './apumap.component.html',
  styleUrls: ['./apumap.component.scss']
})
export class ApumapComponent implements OnInit {
  map: Map;
  locationList: any[];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api
      .getLocations()
      .subscribe((locations: APULocation[]) => (this.locationList = locations));
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
}
