import { Component, Input, OnInit } from '@angular/core';
import { IMainPage } from 'src/app/models/pages';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() content!: IMainPage

  constructor() { }

  ngOnInit(): void {
  }

}
