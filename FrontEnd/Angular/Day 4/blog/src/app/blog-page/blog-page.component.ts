import { Component } from '@angular/core';
import { blogs } from '../blog';
import { IBlog } from '../blog-model';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
})
export class HomeComponent {
  blogs: IBlog[];

  constructor() {
    this.blogs = blogs;
  }
}
