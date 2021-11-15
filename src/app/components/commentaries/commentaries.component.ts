import { Component, Input, OnInit } from '@angular/core';
import { ICommentary } from 'src/app/models/components';

@Component({
  selector: 'app-commentaries',
  templateUrl: './commentaries.component.html',
  styleUrls: ['./commentaries.component.scss']
})
export class CommentariesComponent implements OnInit {
  @Input() content!: ICommentary[]
  @Input() header!: string

  get cellWidth() {
    console.log(window.innerWidth);
    
    return window.innerWidth < 636? 250 : 400
  }

  constructor() { }

  ngOnInit(): void {
  }

}
