import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-slider',
  templateUrl: './common-slider.component.html',
  styleUrls: ['./common-slider.component.scss']
})
export class CommonSliderComponent {
  @Input() sliderLabel = 'Range';
  @Input() minMaxRange = [2, 22];
  @Input() rangeValue = 5;
  @Input() isDisabled: boolean;
  @Output() getRange: EventEmitter<number> = new EventEmitter();
}
