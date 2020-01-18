import { Component, OnInit } from '@angular/core';
import { Playground } from './shared/playground';
import { MOCK_PLAYGROUNDS } from './shared/mock-playgrounds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  playgrounds: Playground[];
  playground: Playground;

  ngOnInit() {
    this.playgrounds = MOCK_PLAYGROUNDS;
  }

  playgroundSelected(playground: Playground): void {
    this.playground = playground;
    console.log(playground);
  }
}
