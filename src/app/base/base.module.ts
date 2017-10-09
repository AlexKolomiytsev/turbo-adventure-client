/**
 * Angular imports
 */
import { NgModule }                   from "@angular/core";

/**
 * Routing module
 */
import { BaseRouting }                from "./base.routing";

/**
 * Feature modules
 */
import { ChatModule }                 from "../features/chat/chat.module";

/**
 * Children components
 */
import { BaseComponent }              from "./base.component";
import { HeaderComponent }            from "./header/header.component";

/**
 * Module
 */
@NgModule({
  imports: [
    ChatModule,
    BaseRouting
  ],
  exports: [],
  declarations: [ BaseComponent, HeaderComponent ]
})
export class BaseModule {
}
