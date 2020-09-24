import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface Sections {
  name: string;
  expand: Boolean;
  toggleIcon:string;
  children?: Sections[];
}

const TREE_DATA: Sections[] = [
  {
    name: 'الكيمياء',
    expand: false,
    toggleIcon: "add",
    children: [
      {name: 'الجزء الأول : التحولات السريعة والتحولات البطيئة لمجموعة كيميائية', expand:false, toggleIcon:'' },
      {name: 'الجزء الثاني : التحولات غير الكلية لمجموعة كيميائية', expand:false, toggleIcon:''},
      {name: 'الجزء الثالث : منحى تطور مجموعة كيميائية', expand:false, toggleIcon:''},
      {name: 'الجزء الرابع : كيفية التحكم في تطور المجموعات الكيميائية', expand:false, toggleIcon:''}
    ]
  }, 
  {
    name: 'الفيزياء',
    expand: false,
    toggleIcon:'add',
    children: [
      {name: 'الجزء الأول : الموجات', expand:false, toggleIcon:''}, 
      {name: 'الجزء الثاني : التحولات النووية', expand:false, toggleIcon:''},
      {name: 'الجزء الثالث : الكهرباء', expand:false, toggleIcon:''},
      {name: 'الجزء الرابع : الميكانيك', expand:false, toggleIcon:''}
    ]
  },
];


@Component({
  selector: 'app-course-schema',
  templateUrl: './course-schema.component.html',
  styleUrls: ['./course-schema.component.scss']
})
export class CourseSchemaComponent implements OnInit {
  datasource:Sections[] = TREE_DATA; 
  toggleIcon: string = "add";
  constructor() { 
  }
 
  ngOnInit(): void {
    console.log(this.datasource);
  }

  toggle = (index)=>{
    this.datasource[index].toggleIcon = (this.datasource[index].expand) ? 'add' : 'remove';
    this.datasource[index].expand = (this.datasource[index].expand) ? false : true;

    for(let item of this.datasource){
      if(this.datasource.indexOf(item) != index){
        item.expand = false;
        item.toggleIcon = "add";
      }
  }
  }
}
