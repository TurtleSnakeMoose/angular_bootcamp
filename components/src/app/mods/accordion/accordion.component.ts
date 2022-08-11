import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() deffs: any[]
  currentItemIndex = -1

  constructor() { }

  ngOnInit(): void {
  }

  onClick(selectedIndex: number) {
    this.currentItemIndex = selectedIndex === this.currentItemIndex ? -1 : selectedIndex
  }

}
