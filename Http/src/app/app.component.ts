import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request

    this.http.post('https://angularrecipe-ac8d0.firebaseio.com/posts.json', postData)
      .subscribe(response => {
        console.log(response);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http.get('https://angularrecipe-ac8d0.firebaseio.com/posts.json')
      .pipe(map(reponseData => {
        const newArray = [];
        for (const key in reponseData) {
          if (reponseData.hasOwnProperty(key)) {
            newArray.push({ ...reponseData[key], id: key });
          }
        }
        return newArray;
      }))
      .subscribe(reponseData => {
        console.log(reponseData);
        this.isFetching = false;
        this.loadedPosts = reponseData;
    });
  }
}
