import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/common/local-storage';
import { LanguageCode } from 'src/app/models/blog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isHidden = false
  lang: LanguageCode | string = LanguageCode.ru
  
  constructor(
    private localStorage: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.lang = this.localStorage.getItem("locale") || LanguageCode.ru
  }

  changeLanguage(lang: LanguageCode | string) {
    this.localStorage.setItem("locale", lang)
  }
}
