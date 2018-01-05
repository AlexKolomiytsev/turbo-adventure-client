/**
 * Angular imports
 */
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

/**
 * Application area modules
 */
import {BaseModule} from './base/base.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

/**
 * Routes
 */
export const routes: Routes = [
  {path: '', loadChildren: 'app/base/base.module#BaseModule'},
  {path: '**', component: PageNotFoundComponent}

];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
