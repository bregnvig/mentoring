import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playground } from '../shared/playground';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() playgrounds: Playground[];
  @Output() selected = new EventEmitter<Playground>();
  selectedPlayground: Playground;

  constructor() { }

  ngOnInit() {
  }

  selectPlayground(playground: Playground): void {
    this.selectedPlayground = playground;
    this.selected.emit(playground);
  }

}
