import { Component, OnInit } from '@angular/core';
import { Playground } from './shared/playground';
import { PlaygroundService } from './shared/playground.service';
import { LocationService } from './shared/location.service';
import { Center, Marker } from './leaflet';
import { map } from 'rxjs/operators';
import { combineLatest, merge, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  playgrounds: Playground[];
  playground: Playground;
  center: Center;
  markers$: Observable<Marker>;
  playground$ = new Subject<Playground>();

  constructor(private service: PlaygroundService, private locationService: LocationService) {
  }

  ngOnInit() {
    this.locationService.current.pipe(
      map(location => new Center(location.lat, location.lng, 15))
    ).subscribe(center => this.center = center);
    const locationMarker$ = this.locationService.current.pipe(
      map(location => new Marker('Me', location.lat, location.lng))
    );
    const playgroundMarker$ = this.playground$.pipe(
      map(p => new Marker('playground', p.position.lat, p.position.lng))
    );
    this.markers$ = merge(locationMarker$, playgroundMarker$);
    combineLatest([
      this.service.getPlaygrounds(),
      this.locationService.current
    ]).subscribe(([playgrounds, location]) => {
      const dFn = this.locationService.getDistance;
      const sortFn = (a: Playground, b: Playground) => dFn(location, a.position) - dFn(location, b.position);
      this.playgrounds = [...playgrounds].sort(sortFn);
    });
  }

  playgroundSelected(playground: Playground): void {
    this.playground = playground;
    this.playground$.next(playground);
    console.log(playground);
  }
}
