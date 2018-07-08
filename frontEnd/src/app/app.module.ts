import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';
import { WpService } from './services/wp.service';

export function WpApiLoaderFactory(http) {
  return new WpApiStaticLoader(http, 'http://localhost/wp-json/', /* namespace is optional, default: '/wp/v2' */);
}

const appRoutes: Routes = [
  {
    path: '', component: PostsComponent
  },
  {
    path: ':id', component: PostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [HttpClientModule]
    })
  ],
  providers: [WpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
