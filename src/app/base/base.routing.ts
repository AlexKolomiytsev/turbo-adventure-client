/**
 * Angular imports
 */
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

/**
 * Components
 */
import { BaseComponent } from "./base.component";

/**
 * Feature modules
 */
import { ChatModule } from "../features/chat/chat.module";

/**
 * Routes
 */
export const routes: Routes = [
  {
    path: 'base',
    component: BaseComponent,
    children: [
      { path: 'chat', loadChildren: 'app/features/chat/chat.module#ChatModule' },
      // default path redirects to chat
      { path: '', redirectTo: 'chat', pathMatch: 'full' },
    ]
  }
];

export const BaseRouting: ModuleWithProviders = RouterModule.forChild(routes);
