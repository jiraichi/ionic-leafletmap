import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker, Layer, Popup } from 'leaflet';

import { ApiService } from '../api.service';

import { APULocation } from '../interfaces/locations';

@Component({
  selector: 'app-academia',
  templateUrl: './academia.page.html',
  styleUrls: ['./academia.page.scss']
})
export class AcademiaPage implements OnInit {
  locationList: any[];
  map: Map;
  displayCard: boolean = false;
  popup: any;
  popupContent: any;
  locationAddress: any;
  locationName: any;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api
      .getLocations()
      .subscribe((locations: APULocation[]) => (this.locationList = locations));
  }

  leafletMap() {
    for (const location of this.locationList) {
      marker([location.location_latitude, location.location_longitude])
        .addTo(this.map)
        .on('click', e => {
          this.onMarkerClick(e);
        })
        .bindPopup(location.location_nice_name);
    }
  }

  onMarkerClick(e) {
    this.popup = e.target.getPopup(); // GETS POPUP FROM THE CURRENT LAYER?
    this.popupContent = this.popup.getContent(); // GETS CONTENT OF POPUP
    this.locationAddress = this.getLocationAddress(this.popupContent);
    this.locationName = this.getLocationName(this.popupContent);
    this.displayCard = true;
  }

  ionViewDidEnter() {
    this.map = new Map('mapId')
      .setView([3.055899, 101.699959], 14)
      .on('click', e => {
        this.onMapClick();
      });
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.leafletMap();
  }

  onMapClick() {
    this.displayCard = false;
  }


  // GET LOCATION NAME
  getLocationName(locationName) {
    for (const location of this.locationList) {
      if (location.location_nice_name === locationName) {
        return location.location_nice_name;
      }
    }
  }

  // GET LOCATION ADDRESS BASED ON NAME
  getLocationAddress(locationName) {
    for (const location of this.locationList) {
      if (location.location_nice_name === locationName) {
        return location.location_full_address.location_address;
      }
    }
  }
}
