import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  scrollEventsCounter = 0
  isHeaderVisible = false
  @ViewChild('hero') hero: HTMLElement | null = null;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    if (this.scrollEventsCounter <= 60) {
      this.scrollEventsCounter += 1
    } else if (!this.isHeaderVisible && this.scrollEventsCounter > 60) {
      this.isHeaderVisible = true
    }
  } 
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.hero);
    
  }

}
