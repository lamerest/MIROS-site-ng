import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { IReview } from 'src/app/models/components';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  @Input() content: IReview

  @ViewChildren("video") videos!: QueryList<ElementRef>;
 
  constructor() { }
}
