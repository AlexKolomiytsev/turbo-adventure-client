/*
 * Angular imports
 */
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { RouterModule }             from '@angular/router';

/*
 * Components
 */
import { RootComponent }            from './components/root/root.component';
import { BaseComponent }            from './components/base/base.component';
import { HeaderComponent }          from './components/base/header/header.component';
import { PageNotFoundComponent }    from './components/page-not-found/page-not-found.component';

/**
 * Routes
 */
import { routes }                   from "./app.routes";

/**
 * Main app module
 */
@NgModule({
  declarations: [
    RootComponent,
    BaseComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
