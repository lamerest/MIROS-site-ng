import { Component, ElementRef, Input, OnChanges, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IReview } from 'src/app/models/components';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  @Input() content!: IReview

  @ViewChildren("video") videos!: QueryList<ElementRef>;
 
  constructor() { }

  ngOnInit(): void {
  }
}
