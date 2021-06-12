import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
 static settings: IAppConfig;

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  load() {

    const jsonFile = `assets/config/config.json`;
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      // tslint:disable-next-line:only-arrow-functions typedef
      this.http.get(jsonFile).toPromise().then(function(response: IAppConfig) {
        ServiceApiService.settings = (response as IAppConfig);
        console.log(ServiceApiService.settings);
        resolve();

      }).catch((response: any) => {
        reject(`Could not load the config file`);
      });
    });
  }
}

export interface IAppConfig {
  global: {
    app_id: string,
    domain_name: string,
    port_number: string
  };
}
