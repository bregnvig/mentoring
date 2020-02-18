import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Playground } from '../shared/playground';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnChanges, OnInit {

  @Input() playground: Playground;
  editing = false;
  playgroundControl = new FormControl(null, Validators.required);


  ngOnInit() {
    this.playgroundControl.valueChanges.subscribe(console.log);
  }

  ngOnChanges() {
    this.playgroundControl.patchValue(this.playground);
  }

}
