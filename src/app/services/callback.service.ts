import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICallBack } from '../models/callback';
import { BaseRequestService } from './base-request.service';

@Injectable({
  providedIn: 'root',
})
export class CallbackService {
  constructor(private readonly _requestService: BaseRequestService) {}

  async postCallBack(callback: ICallBack) {
    return await this._requestService.post(
      environment.serverUrl + '/call-backs',
      callback
    );
  }
}
