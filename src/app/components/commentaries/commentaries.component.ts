import { Component, Input, OnInit } from '@angular/core';
import { ICommentary } from 'src/app/models/pages';

@Component({
  selector: 'app-commentaries',
  templateUrl: './commentaries.component.html',
  styleUrls: ['./commentaries.component.scss']
})
export class CommentariesComponent implements OnInit {
  @Input() content!: ICommentary

  constructor() { }

  ngOnInit(): void {
  }

}
