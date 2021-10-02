import { Injectable } from '@angular/core';
import { IArticle, ICategory } from '../models/blog';
import { BaseRequestService } from './base-request.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  articleUrl = "/articles"
  categoryUrl = "/categories"

  constructor(private requestService: BaseRequestService) { }

  async getArticles(): Promise<IArticle[]> {
    return await this.requestService.get(this.articleUrl)
  }

  async getArticleById(articleId: number): Promise<IArticle> {
    return await this.requestService.get(this.articleUrl + "/" + articleId)
  }

  async getCategories(): Promise<ICategory[]> {
    return await this.requestService.get(this.categoryUrl)
  }

  async getCategoryById(categoryId: number): Promise<ICategory> {
    return await this.requestService.get(this.categoryUrl + "/" + categoryId)
  }
}
