import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playground } from './playground';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  private readonly request$: Observable<Playground[]>;

  constructor(http: HttpClient) {
    this.request$ = http.get<Playground[]>('assets/copenhagen.json').pipe(
      shareReplay()
    );
  }

  getPlaygrounds(): Observable<Playground[]> {
    return this.request$;
  }
}
