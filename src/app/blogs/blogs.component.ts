import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogAttributes } from '../blog-attributes';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
 @Input() post:BlogAttributes;

  constructor() { }

  ngOnInit(): void {
    // this.title = "BTECH in Computer Science and Engineering";
    // this.Summary = "a c d";
    // this.college = "nbxczdsgfd";
  }

}
