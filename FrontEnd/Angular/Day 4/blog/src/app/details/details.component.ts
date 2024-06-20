import { Component } from '@angular/core';
import { blogs } from '../blog';
import { IBlog } from '../blog-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  blogs: IBlog[];

  constructor() {
    this.blogs = blogs;
  }
}
