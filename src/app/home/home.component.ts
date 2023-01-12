import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  template: `
    <div class="card-columns">
      <a *ngFor="let artwork of artworks" [routerLink]="['/home', artwork.objectNumber]">
      <div class="card">
          <img class="card-img-top" [src]="artwork.webImage.url" [alt]="artwork.title">
        <div class="card-body">
          <h5 class="card-title">{{ artwork.title }}</h5>
          <p class="card-text">{{ artwork.principalOrFirstMaker }}</p>
        </div>
      </div>
    </a>
    </div>

  `,
  styles: []
})
export class HomeComponent implements OnInit {
  artworks: any[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://www.rijksmuseum.nl/api/nl/collection', {
      params: {
        key: '10FNBpv3',
        format: 'json'
      }
    }).subscribe((data: any) => {
      this.artworks = data.artObjects;
    });
  }
}
