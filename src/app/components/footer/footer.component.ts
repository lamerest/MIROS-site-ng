import { Component, Input, OnInit } from '@angular/core';
import { IFooter } from 'src/app/models/components';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() content!: IFooter
  
  constructor() { }

  async ngOnInit() { }
}
