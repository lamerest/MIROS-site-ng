import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../common/local-storage';

@Injectable({
  providedIn: 'root'
})
export class BaseRequestService {

  constructor(
    public http: HttpClient, //public _snackBar: MatSnackBar,
    private localStorage: LocalStorageService,
  ) {}
  
  get<T>(url: string, headersObj?: any, useDataWrapper = true): Promise<T> {
    return this.request(url, "GET", headersObj, null, useDataWrapper);
  }

  post<T>(url: string, data: any, useDataWrapper = true): Promise<T> {
    return this.request(url, "POST", null, data, useDataWrapper);
  }

  delete<T>(url: string, data?: any, useDataWrapper = true): Promise<T> {
    return this.request(url, "DELETE", null, data, useDataWrapper);
  }

  patch<T>(url: string, data: any, useDataWrapper = true): Promise<T> {
    return this.request(url, "PATCH", null, data, useDataWrapper);
  }

  put<T>(url: string, data: any, useDataWrapper = true): Promise<T> {
    return this.request(url, "PUT", null, data, useDataWrapper);
  }

  private async request(
    url: string,
    method: "GET" | "POST" | "DELETE" | "PATCH" | "PUT" = "GET",
    headersObj: any = {},
    data: any = null,
    useDataWrapper: boolean
  ): Promise<any> {
    let body;
    let headers
    
    if (this.localStorage.getItem("accessToken")) {
      headers = {
        Authorization: `Bearer ${this.localStorage.getItem("accessToken") || ""}`,
        ...headersObj,
      };  
    }
    
    if (data) {
      headers["Content-Type"] = "application/json";
      body = data;
    }
    try {
      if (useDataWrapper) {
        const response = await this.http
          .request(method, environment.serverUrl + url, {
            headers,
            body,
          })
          .toPromise()
          .then(
            (response) => {
              return response;
            },
            (error) => {
              throw error;
            }
          );

        return response;
      } else {
        const response = await this.http
          .request(method, environment.serverUrl + url, {
            headers,
            body,
          })
          .toPromise();
        return response;
      }
    } catch (e) {
      throw e as HttpErrorResponse;
    }
  }
}
