import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Playground } from '../shared/playground';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @Input() playground: Playground;
}
