import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICallBack } from 'src/app/models/callback';
import { ICallBackPopup } from 'src/app/models/components';
import { BaseRequestService } from 'src/app/services/base-request.service';
import { CallbackService } from 'src/app/services/callback.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Input() content: ICallBackPopup | undefined;

  name: string = ""
  phone: string = ""
  email: string = ""
  
  constructor(
    private readonly _callbackService: CallbackService,
  ) { }

  ngOnInit(): void {
  }

  async sendCallBack() {
    console.log(this.createCallBackObject());
    console.log(environment.serverUrl + '/call-backs');
    this._callbackService.postCallBack(this.createCallBackObject())
    this.closePopup()
  }

  private createCallBackObject(): ICallBack {
    return {
      name: this.name,
      phone: this.phone,
      email: this.email,
    }
  }

  closePopup() {
    this.closeModal.emit()
  }
}
