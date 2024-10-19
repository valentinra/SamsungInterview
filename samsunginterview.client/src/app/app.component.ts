import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

interface Person {
  name: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PopupService],
})
export class AppComponent implements OnInit {
  public persons: Person[] = [];

  constructor(private http: HttpClient, injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

  ngOnInit() {
    this.getpersons();
  }

  getpersons() {
    this.http.get<Person[]>('/person').subscribe(
      (result) => {
        this.persons = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showPerson(person: Person) {
    this.popup.showAsElement(person.address); 
  }

  title = 'samsunginterview.client';
}
