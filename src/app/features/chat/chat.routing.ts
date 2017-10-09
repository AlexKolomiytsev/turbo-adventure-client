/**
 * Angular imports
 */
import { RouterModule, Routes }           from "@angular/router";
import { ModuleWithProviders }            from "@angular/core";

/**
 * Components
 */
import { ChatComponent }                  from "./chat.component";
import { ConversationsComponent }         from "./conversations/conversations.component";

/**
 * Routes
 */
const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      { path: 'conversations', component: ConversationsComponent },
      // default path redirects to conversations
      { path: '', redirectTo: 'conversations', pathMatch: 'prefix' },
    ]
  }
];

export const ChatRouting: ModuleWithProviders = RouterModule.forChild(routes);
