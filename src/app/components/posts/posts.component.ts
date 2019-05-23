import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }

  filterPost = '';

  posts = [
    {
      id: 1,
      title: 'Post One',
      date: '02/04/2019'
    },
    {
      id: 2,
      title: 'Post Two',
      date: '02/04/2019'
    },
    {
      id: 3,
      title: 'Post Three',
      date: '02/04/2019'
    },
    {
      id: 4,
      title: 'Post Four',
      date: '02/04/2019'
    },
    {
      id: 5,
      title: 'Post Five',
      date: '02/04/2019'
    },
    {
      id: 6,
      title: 'Post Six',
      date: '02/04/2019'
    },
    {
      id: 7,
      title: 'Post Seven',
      date: '02/04/2019'
    }
  ];

  ngOnInit() {
  }

}
