import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressDialog } from './address-dialog/address-dialog.component';

interface Person {
  name: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public persons: Person[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

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

    this.dialog.open(AddressDialog, {
      width: '250px',
      data: { address: person.address }
    });
  }

  title = 'samsunginterview.client';
}
