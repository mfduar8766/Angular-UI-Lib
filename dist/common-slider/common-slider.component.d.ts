import { EventEmitter } from '@angular/core';
export declare class CommonSliderComponent {
  sliderLabel: string;
  minMaxRange: number[];
  rangeValue: number;
  isDisabled: boolean;
  getRange: EventEmitter<number>;
}
