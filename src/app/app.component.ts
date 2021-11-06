
import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';
import { ContentService } from './services/content.service';
import { IFooter, IHeader } from './models/components';
import { LanguageCode } from './models/blog';
import { LanguageService } from './services/language.service';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MIROS PLATFORM';

  header: IHeader = standardHeader
  footer: IFooter = standardFooter

  static isBrowser = new BehaviorSubject<boolean | null>(null);

  langSubscription!: Subscription;
  subscriber = {
    next: () => {
      this.getFooterAndHeader();
    },
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private contentService: ContentService,
    private languageService: LanguageService,
    private readonly _meta: Meta
    ) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }

  ngOnInit () {
    this.getFooterAndHeader()
    this.langSubscription = this.languageService.langSubject.subscribe(this.subscriber)
    this.setMetaTags()    
  }

  async getFooterAndHeader() {
    this.header = await this.contentService.getHeader()
    this.footer = await this.contentService.getFooter()    
  }

  private setMetaTags() {
    this._meta.addTag({ name: "author", content: "Slava Vladykin"})
  }
}

const standardHeader: IHeader = {
  id: 1,
  menu:	{
    id: 1,
    main: "Главная",
    blog: "Блог",
    marathons: "Марафоны",
    about: "О нас"
  },
  languages:	[
    {
      languageName: "RU",
      languageCode: LanguageCode.ru,
      id: 1
    },
    {
      languageName: "EN",
      languageCode: LanguageCode.en,
      id: 1
    },
    {
      languageName: "FR",
      languageCode: LanguageCode.fr,
      id: 1
    },
  ],
  locale:	LanguageCode.ru
}

const standardFooter: IFooter = {
  id: 1,
  footer: {
    id: 1,
    socialMediaHeader: "Наши соц. сети",
    contactsBlockHeader:	"Контакты",
    contactsBlockPhone:	"+7 (900) 645 11 65",
    contactsBlockEmail:	"miros.platform@gmail.com",
    menu: {
      id: 1,
      main: "Главная",
      about: "О нас",
      marathons: "Марафоны",
      blog: "Блог"
    }
  },
  locale: LanguageCode.ru
}