import { Component } from '@angular/core';
import {ServiceService} from "../service/service.service";
@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent {
  artworks: any;
  searchTerm!: string;
  constructor(private ServiceService: ServiceService) { }

  search() {
    this.ServiceService.getArtworks(this.searchTerm).subscribe(artworks => {
      this.artworks = artworks;
    });
  }

}
