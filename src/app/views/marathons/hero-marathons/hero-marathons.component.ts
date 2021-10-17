import { Component, Input, OnInit } from '@angular/core';
import { IMarathonsPage } from 'src/app/models/pages';

@Component({
  selector: 'app-hero-marathons',
  templateUrl: './hero-marathons.component.html',
  styleUrls: ['./hero-marathons.component.scss']
})
export class HeroMarathonsComponent implements OnInit {
  @Input() content!: IMarathonsPage
  
  constructor() { }

  ngOnInit(): void {
  }

}
