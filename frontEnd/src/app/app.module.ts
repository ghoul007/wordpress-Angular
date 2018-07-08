import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular'
import { HttpClient } from '@angular/common/http'
import { AppComponent } from './app.component';

export function WpApiLoaderFactory(http: HttpClient) {
  return new WpApiStaticLoader(http, 'http://YOUR_DOMAIN/wp-json/', /* namespace is optional, default: '/wp/v2' */);
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [HttpClient]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
