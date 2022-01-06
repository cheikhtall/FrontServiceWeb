import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import {Region} from "../app/model/region.model";
import {RegionServices} from "./region.services";

@Injectable({
  providedIn: 'root'
})
export class MarkerServices {
  serveur: string ="http://localhost:5000/api/map/region" ;
  private properties: any;
  regions : Region[] | null = null;
  constructor(private http: HttpClient,
              private regionService: RegionServices) {}


  donnee(): void {

    this.regionService.listeRegions().subscribe( data=> {

        this.regions = data;
        console.log(data);
      },
   );


  }


makeCapitalMarkers(map: L.Map): void {

    this.http.get(this.serveur).subscribe((res: any) => {


      for (const c of res.features) {

        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]);
        const prop = c.properties;
        console.log(c.properties)

        marker.bindPopup( '<p> Nom :'+prop.region+'</p>'+
          '<p> Nombre de bureaux :'+prop.bureaux+'</p>'+
          '<p> Nombre d\'électeurs :'+prop.electeurs+'</p>'+
          '<p> Suffrages Valides :'+prop.suffrageValable+'</p>'+
          '<p> Nombre Invalides :'+prop.suffrageInvalide+'</p>');
        marker.on('mouseover', function (e) {
          marker.openPopup();
        });
        marker.on('mouseout', function (e) {
          marker.closePopup();
        });

        marker.addTo(map)
      }
    });


     }

}
