<<<<<<< HEAD:src/app/project-info/project-info.component.ts
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  gotoPage(){
    this.location.back();
  }

}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 9bf6412507070fe56d30c75b1a5f4e8d1cd31123:src/app/common/project-info/project-info.component.ts
