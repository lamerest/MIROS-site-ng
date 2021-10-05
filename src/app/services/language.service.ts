import { Injectable } from '@angular/core';
import { LocalStorageService } from '../common/local-storage';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private localStorage: LocalStorageService,
  ) { }

  getWindow() {
    return window
  }
}
