import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { IMarathonsPage } from 'src/app/models/pages';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-marathons',
  templateUrl: './marathons.component.html',
  styleUrls: ['./marathons.component.scss']
})
export class MarathonsComponent implements OnInit, OnDestroy{
  content: IMarathonsPage = standardContent
  
  langSubscription!: Subscription;
  subscriber = {
    next: () => {
      this.getContent();
    },
  };

  constructor(
    private languageService: LanguageService,
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.getContent()
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe()
  }

  async getContent() {
    this.content = await this.contentService.getAboutPage()
  }
}

const standardContent: IMarathonsPage = {
  
}