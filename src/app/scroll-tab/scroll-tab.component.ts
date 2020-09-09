import { Component, OnInit,ViewChild,ViewContainerRef } from "@angular/core";

@Component({
  selector: "app-scroll-tab",
  templateUrl: "./scroll-tab.component.html",
  styleUrls: ["./scroll-tab.component.css"],

})
export class ScrollTabComponent implements OnInit {

  _showScrollActionButton = true;
  xPos=0;yPos=0;
  _tabData = Array(6)
    .fill(0)
    .map((itm, i) => {
      return {
        header: `Tab heading ${i + 1}`
      };
    });
  private _scrollPos = 50;
  private _scrollContainer:any;
  showContextMenu:boolean = false;

  constructor() {}

  ngOnInit() {
    this._scrollContainer = document.getElementById('scrollContainer');
    // setTimeout(()=>{

    // this._showScrollActionButton = this.checkScrollBar(this._scrollContainer,'horizontal');
    // },2000)
    
  }

closeAllContextMenu(){
  this._tabData =[];

}

exitContextMenu(){
  this.showContextMenu = false;
}

myContextMenu(evt){
  this.showContextMenu = true;
   this.xPos = evt.clientX;
   this.yPos = evt.clientY;
    evt.preventDefault();
}
  removeData(index: number) {
    let scrollContainer = 
    this._tabData.splice(index, 1);  
    this._showScrollActionButton = this.checkScrollBar(scrollContainer,'horizontal');
    console.log(this._showScrollActionButton);
  }

  scrollRight() {
    // (document.getElementById("scrollContainer").scrollLeft += Math.abs(
    //   this._scrollPos
    // ));

    this._scrollContainer.scrollLeft += Math.abs(this._scrollPos);

  }

  scrollLeft() {
   this._scrollContainer.scrollLeft += -Math.abs(this._scrollPos);

  }

  checkScrollBar(element, dir) { 
    
                
                dir = (dir === 'vertical') ? 
                            'scrollTop' : 'scrollLeft'; 
                  
                var res = !! element[dir]; 
                  
                if (!res) { 
                    element[dir] = 1; 
                    res = !!element[dir]; 
                    element[dir] = 0; 
                } 
                return res; 
            } 
}
