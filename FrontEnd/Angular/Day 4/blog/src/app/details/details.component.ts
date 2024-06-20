import { Component } from '@angular/core';
import { blogs } from '../blog';
import { IBlog } from '../blog-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  blogs: IBlog[];
  blog: IBlog;

  constructor(private route: ActivatedRoute) {
    this.blogs = blogs;
    const id = +this.route.snapshot.params['index'];
    this.blog = this.blogs[id];
  }
}
