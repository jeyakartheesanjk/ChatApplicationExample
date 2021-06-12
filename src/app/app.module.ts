import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ServiceApiService } from './service/service-api.service';
export function initializeApp(appConfigService: ServiceApiService) {
  return (): Promise<any> => {
    return appConfigService.load();
  };
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:  [{ provide: APP_INITIALIZER, useFactory: initializeApp, deps: [ServiceApiService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
