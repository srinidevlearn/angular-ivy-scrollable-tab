import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-scroll-tab",
  templateUrl: "./scroll-tab.component.html",
  styleUrls: ["./scroll-tab.component.css"]
})
export class ScrollTabComponent implements OnInit {
  _tabData = Array(15)
    .fill(0)
    .map((itm, i) => {
      return {
        header: `Tab heading ${i + 1}`
      };
    });
  private _scrollPos = 50;

  constructor() {}

  ngOnInit() {}

  removeData(index: number) {
    console.log(this._tabData.length);
    this._tabData.splice(index, 1);
    console.log(this._tabData.length);
  }

  scrollRight() {
    let d = (document.getElementById("scrollContainer").scrollLeft += Math.abs(
      this._scrollPos
    ));

    console.log(d);
  }

  scrollLeft() {
    let d = (document.getElementById("scrollContainer").scrollLeft += -Math.abs(
      this._scrollPos
    ));
    console.log(d);
  }
}
