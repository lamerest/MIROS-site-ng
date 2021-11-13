import { Component, Input, OnInit } from '@angular/core';
import { IMainPage } from 'src/app/models/pages';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  @Input() content!: IMainPage

  constructor() { }

  ngOnInit(): void {
  }

}
