import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-tab',
  templateUrl: './common-tab.component.html',
  styleUrls: ['./common-tab.component.css']
})
export class CommonTabComponent implements OnInit {
  @Input() tabContent;
  @Input() canDelete = true;
  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  setIndex(index: number) {
    this.currentIndex = index;
  }

  deleteTab(tabIndex: number) {
    this.tabContent = this.tabContent.filter(item => {
      return this.tabContent.indexOf(item) !== tabIndex;
    });
  }
}
