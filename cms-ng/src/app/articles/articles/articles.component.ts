import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  // $ est une convention pour indiquer un Observable
  articles$ = null;

  constructor( private httpClient: HttpClient) { }

  ngOnInit() {
    // @ts-ignore
    this.articles$ = this.httpClient.get<any[]>('http://localhost:3000/articles')
  }

}
