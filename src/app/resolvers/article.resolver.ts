import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { IArticle } from '../models/article';
import { BlogService } from '../services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<IArticle> {

  constructor(
    private blogService: BlogService,
  ) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<IArticle> {
    ;
    return await this.blogService.getArticleById(route.params.id);
  }
}
