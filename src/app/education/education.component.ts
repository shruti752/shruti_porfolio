import { Component, OnInit } from '@angular/core';
import { BlogAttributes } from '../blog-attributes';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  blogAttributes:BlogAttributes[] = [];

  constructor() { }

  ngOnInit(): void {
   this.blogAttributes.push(new BlogAttributes("B.Tech. in Computer Science & Engineering","(2014-2018)","Greater noida Institute Of Technology"));
   this.blogAttributes.push(new BlogAttributes("Higher Secondary Certificate","(2012-2014)","National Institute Of Open Schooling"));
   this.blogAttributes.push(new BlogAttributes("Senior Secondary School","(2010-2012)","Bihar Secondary Examination Board"));

  }

}
