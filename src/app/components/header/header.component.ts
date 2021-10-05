import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/common/local-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isHidden = false
  lang: string = "EN"
  
  constructor(
    private localStorage: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.lang = this.localStorage.getItem("locale") || "EN"
  }

  changeLanguage(lang: string) {
    this.localStorage.setItem("locale", lang)
  }
}
