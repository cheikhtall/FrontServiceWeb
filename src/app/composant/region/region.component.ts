import { Component, OnInit } from '@angular/core';
import {Region} from "../../model/region.model";
import {RegionServices} from "../../../services/region.services";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  regions:Region[]|null=null;
  private isLoad: boolean | undefined;

  constructor(private regionService : RegionServices ) {

  }

  ngOnInit(): void {
    this.regionService.listeRegions().subscribe( data=> {

        this.regions = data;
        this.isLoad = false;
        console.log(data);
      },
      error => {
        this.isLoad = false;
      });

  }

}
