import { ApplicationRef, createComponent, EnvironmentInjector, Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from './popup.component';
@Injectable()
export class PopupService {
  constructor(
    private injector: EnvironmentInjector,
    private applicationRef: ApplicationRef,
  ) { }

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement(message: string) {
    // Create element
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement(
      'popup-element',
    ) as any;
    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
    // Set the message
    popupEl.message = message;
    // Add to the DOM
    document.body.appendChild(popupEl);
  }
}
