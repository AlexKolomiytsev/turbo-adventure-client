/**
 * Angular imports
 */
import { Routes }                         from "@angular/router";

/**
 * Project imports
 */
import { BaseComponent }                  from "./components/base/base.component";
import { PageNotFoundComponent }          from "./components/page-not-found/page-not-found.component";

/**
 * Routes
 */
export const routes: Routes = [
  { path: 'base', component: BaseComponent },
  { path: '', redirectTo: '/base', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
