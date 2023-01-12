import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey = '10FNBpv3';
@Injectable({
  providedIn: 'root'
})

export class ServiceService implements OnInit {
  private endpoint = `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}`;
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
  getArtworks(searchTerm: string | undefined) {
    return this.http.get(`${this.endpoint}&q=${searchTerm}`);
  }
}
