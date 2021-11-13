import { Component, Input, OnInit } from '@angular/core';
import { IHeader } from 'src/app/models/components';
import { LanguageCode } from 'src/app/models/localization';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isHidden = false
  @Input() content!: IHeader

  lang: LanguageCode = LanguageCode.ru
  LanguageCode = LanguageCode

  isMobileMenuOpen = false
  
  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit() {    
    this.lang = this.languageService.getLanguage()
  }

  changeLanguage() {
    this.languageService.setLanguage(this.lang)
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
  }
}
