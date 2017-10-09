import { Component, OnInit } from '@angular/core';
import { Router, Route } from "@angular/router";

@Component({
  selector: 'ta-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.config);
  }


}
