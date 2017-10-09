/**
 * Angular imports
 */
import { NgModule }                     from "@angular/core";

/**
 * Routing module
 */
import { ChatRouting }                  from "./chat.routing";

/**
 * Сomponents
 */
import { ChatComponent }                from "./chat.component";
import { ConversationsComponent }       from './conversations/conversations.component';

/**
 * Module
 */
@NgModule({
  imports: [ ChatRouting ],
  exports: [],
  declarations: [ ChatComponent, ConversationsComponent ]
})
export class ChatModule {
}
