import { Component, ElementRef, Input, OnChanges, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IMainPage, IReview } from 'src/app/models/pages';
import { environment } from 'src/environments/environment';

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
