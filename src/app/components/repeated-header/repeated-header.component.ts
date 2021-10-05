import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeated-header',
  templateUrl: './repeated-header.component.html',
  styleUrls: ['./repeated-header.component.scss']
})
export class RepeatedHeaderComponent implements OnInit {
  @Input() header: string = "СТАТЬИ";
  array = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]

  constructor() { }

  ngOnInit(): void {
  }

}
