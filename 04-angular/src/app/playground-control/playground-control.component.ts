import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Playground } from '../shared/playground';

@Component({
  selector: 'app-playground-control',
  templateUrl: './playground-control.component.html',
  styleUrls: ['./playground-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlaygroundControlComponent),
      multi: true
    }
  ]
})
export class PlaygroundControlComponent implements OnInit, ControlValueAccessor {

  propagateChange: (_: any) => any;
  propagateTouched: (_?: any) => any;
  fg: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fg = this.fb.group({
      name: [null, Validators.required],
      addressDescription: [],
      description: [],
    });
    this.fg.valueChanges.subscribe(value => this.propagateChange(this.fg.valid ? value : null));
  }

  writeValue(value: Playground) {
    if (value) {
      this.fg.patchValue(value, {emitEvent: false});
    }
  }


  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.fg.disable() : this.fg.enable();
  }

  registerOnTouched(fn: (_?: any) => any): void {
    this.propagateTouched = fn;
  }

  registerOnChange(fn: (_?: any) => any): void {
    this.propagateChange = fn;
  }

  // Not a interface method, but what is this?
  onBlur() {
    // tslint:disable-next-line
    this.propagateTouched && this.propagateTouched();
  }

}
