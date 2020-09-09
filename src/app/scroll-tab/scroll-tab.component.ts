import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-tab',
  templateUrl: './scroll-tab.component.html',
  styleUrls: ['./scroll-tab.component.css']
})
export class ScrollTabComponent implements OnInit {

  _tabData = Array(15).fill(0).map((itm,i)=>{
    return {
      header:`Tiranga-DL-21-J-22${i+1}`
    }
  });

  constructor() { }

  ngOnInit() {
  }

  removeData(index:number){
     console.log(this._tabData.length);
     this._tabData.splice(index, 1);
     console.log(this._tabData.length);
  }

}