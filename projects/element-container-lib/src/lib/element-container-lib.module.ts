import { NgModule, Injector } from '@angular/core';
import { ElementContainerLibComponent } from './element-container-lib.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [ElementContainerLibComponent],
  imports: [],
  entryComponents: [ElementContainerLibComponent],
  exports: [ElementContainerLibComponent]
})
export class ElementContainerLibModule {

  constructor(injector: Injector) {
    const custom = createCustomElement(ElementContainerLibComponent, { injector: injector });
    customElements.define('custom-element-lib', custom);
  }

}
