import { Component, Input, OnInit } from '@angular/core';
import { IMainPage, IReview } from 'src/app/models/pages';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  @Input() content!: IReview

  constructor() { }

  ngOnInit(): void {
  }

}
