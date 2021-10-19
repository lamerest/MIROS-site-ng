import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IMainPage, IReview } from 'src/app/models/pages';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, OnChanges {
  @Input() content!: IReview

  constructor() { }

  ngOnInit(): void {
    this.changeVideosUrls()
  }

  ngOnChanges() {
    this.changeVideosUrls()
  }

  changeSlide(amount: number) {

  }

  changeVideosUrls() {
    for (let video of this.content.videos) {
      if (!video.url.includes("http")) {
        video.url = environment.serverUrl + video.url
      }
    }
    console.log(this.content);
    
  }
}
