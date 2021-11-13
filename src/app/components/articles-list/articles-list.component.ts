import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  @Input() articles: IArticle[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
