import { Injectable } from '@angular/core';
import { BaseRequestService } from './base-request.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = "articles"

  constructor(private requestService: BaseRequestService) { }

  getArticles() {
    return this.requestService.get(this.baseUrl)
  }

  getArticleById(articleId: number) {
    return this.requestService.get(this.baseUrl + articleId)
  }
}
