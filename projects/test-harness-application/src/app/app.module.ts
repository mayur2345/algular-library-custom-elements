import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { ElementContainerLibModule } from 'element-container-lib';
import { createCustomElement } from '@angular/elements';
import { ElementComponent } from './element-component/element.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    ElementComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElementContainerLibModule
  ],
  providers: [],
  entryComponents: [ElementComponent, AppComponent],
  //bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  ngDoBootstrap(appRef: import("@angular/core").ApplicationRef): void {
    appRef.bootstrap(AppComponent);
  }


  constructor(injector: Injector) {
    const custom = createCustomElement(ElementComponent, { injector: injector });
    customElements.define('custom-element-project', custom);

    const app = createCustomElement(ElementComponent, { injector: injector });
    customElements.define('app-root', app);
  }

}
