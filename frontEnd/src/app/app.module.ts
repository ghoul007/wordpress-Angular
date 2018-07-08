import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular'
import { HttpClient } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

export function WpApiLoaderFactory(http ) {
  return new WpApiStaticLoader(http, 'http://localhost/wp-json/', /* namespace is optional, default: '/wp/v2' */);
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
