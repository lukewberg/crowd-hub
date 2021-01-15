import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post-service.service';
import { Post, Tag } from '../app/types/post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'crowd-hub';
  postData!: Post;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().then(result => {
      this.postData = result;
    })
  }

  filterInterests(tags: Array<Tag>): Array<Tag> {
    return tags.filter(tag => { return tag.type_name === 'Interest' })
  }
}
