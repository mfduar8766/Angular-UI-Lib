import { OnInit, EventEmitter } from '@angular/core';
export declare class CommonButtonComponent implements OnInit {
  buttonText: string;
  buttonType: string;
  isDisabled: boolean;
  backgroundColor: string;
  handleClick: EventEmitter<any>;
  constructor();
  ngOnInit(): void;
}
