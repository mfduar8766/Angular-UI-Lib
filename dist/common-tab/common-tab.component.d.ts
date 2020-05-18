import { OnInit } from '@angular/core';
export declare class CommonTabComponent implements OnInit {
  tabContent: any;
  canDelete: boolean;
  currentIndex: number;
  constructor();
  ngOnInit(): void;
  setIndex(index: number): void;
  deleteTab(tabIndex: number): void;
}
