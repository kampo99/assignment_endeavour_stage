import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from "../../service/service.service";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  artwork: any;
  objectNumber: string | undefined;

  constructor(private ServiceService: ServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.objectNumber = params[':objectNumber'];
      this.ServiceService.getArtworks(this.objectNumber).subscribe(artwork => {
        this.artwork = artwork;
      });
    });
  }
}
