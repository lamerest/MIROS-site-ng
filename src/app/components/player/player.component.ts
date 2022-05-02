import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input() src: string
  @ViewChild('video') player: ElementRef;

  isVideoPlaying = false
  
  constructor() { }

  ngOnInit(): void {
    this.changeVideosUrls()
  }

  ngOnChanges() {
    this.changeVideosUrls()
  }

  playVideo() {
    this.player.nativeElement.play()
    this.isVideoPlaying = true
  }

  stopVideo() {
    this.isVideoPlaying = false
    this.player.nativeElement.pause()
  }

  changeVideosUrls() {
    if (!this.src.includes("http")) {
      this.src = environment.serverUrl + this.src
    }
  }
}
