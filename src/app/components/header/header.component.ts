import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/common/local-storage';
import { LanguageCode } from 'src/app/models/blog';
import { IHeader } from 'src/app/models/pages';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isHidden = false
  @Input() content: IHeader = standardHeader

  lang: LanguageCode = LanguageCode.ru
  LanguageCode = LanguageCode
  
  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.lang = this.languageService.getLanguage()
  }

  changeLanguage() {
    this.languageService.setLanguage(this.lang)
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
