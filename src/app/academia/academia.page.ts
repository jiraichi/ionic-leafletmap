import { Component, OnInit } from "@angular/core";
import { Map, latLng, tileLayer, Layer, marker } from "leaflet";

@Component({
  selector: "app-academia",
  templateUrl: "./academia.page.html",
  styleUrls: ["./academia.page.scss"]
})
export class AcademiaPage implements OnInit {
  map: Map;

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new Map("mapId").setView([3.036376, 101.707362], 18);
    tileLayer(
      "http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "edupala.com © ionic LeafLet"
      }
    ).addTo(this.map);
    marker([3.036376, 101.707362])
      .addTo(this.map)
      .bindPopup("Academia")
      .openPopup();
  }

  constructor() {}

  ngOnInit() {}
}
