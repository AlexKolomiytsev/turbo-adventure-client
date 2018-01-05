/**
 * Angular imports
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

/**
 * Root component
 */
import {RootComponent} from './app.root.component';

/**
 * Application area modules
 */
import {BaseModule} from './base/base.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

/**
 * Main routing module
 */
import {AppRouting} from './app.routing';

/**
 * Main app module
 */
@NgModule({
  imports: [
    BrowserModule,
    AppRouting,
    BaseModule
  ],
  providers: [],
  declarations: [RootComponent, PageNotFoundComponent],
  bootstrap: [RootComponent]
})
export class AppModule {
}
