import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  constructor(private http: HttpClient) {}

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

  title = 'samsunginterview.client';
}
