import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-scroll-tab",
  templateUrl: "./scroll-tab.component.html",
  styleUrls: ["./scroll-tab.component.css"]
})
export class ScrollTabComponent implements OnInit {
  _showScrollActionButton = true;
  xPos = 0;
  yPos = 0;

  _tabData: any;
  get tabData(): any {
    return this._tabData;
  }
  @Input() set tabData(value: any) {
    if (Array.isArray(value)) {
      if (this.validateTabData(value) == false) {
        this._tabData = [];
        throw new Error("Invalid tabdata format");
      } else {
        this._tabData = value;
        setTimeout(() => {
          document.getElementById("tab-0").click();
        }, 500);
        // tab-{{i}}
      }
    }
  }

  _scrollPos: number = 145;
  get scrollPos(): number {
    return this._scrollPos;
  }
  @Input() set scrollPos(value: number) {
    this._scrollPos = value;
  }

  _scrollContainer: any;

  showContextMenu: boolean = false;
  tab_index = 0;

  @Output() selectedTabData = new EventEmitter();

  constructor() {}
  @ViewChild("tabContents", { read: ElementRef })
  public tabContents: ElementRef<any>;

  ngOnInit() {
    this._scrollContainer = document.getElementById("scrollContainer");
  }

  closeAllTabs() {
    this._tabData = [];
    this.selectedTabData.emit(this._tabData);
    setTimeout(() => {
      this.showContextMenu = false;
    }, 500);
  }

  exitContextMenu() {
    this.showContextMenu = false;
  }
  selectedTab(i: number) {
    
    setTimeout(() => {
      this.selectedTabData.emit(this._tabData[i]);
    }, 100);
  }

  myContextMenu(evt) {
    this.showContextMenu = true;
    this.xPos = evt.clientX;
    this.yPos = evt.clientY;
    evt.preventDefault();
  }
  removeData(i: number) {
    this._tabData.splice(i, 1);

    setTimeout(() => {
      if (document.getElementById("tab-" + i) == null) {
        this._tabData = [];
        this.selectedTabData.emit(this._tabData);
      } else {
        document.getElementById("tab-" + i).click();
      }
    }, 100);
  }

  scrollRight() {
    this.tabContents.nativeElement.scrollTo({
      left: this.tabContents.nativeElement.scrollLeft + this._scrollPos,
      behavior: "smooth"
    });
  }

  scrollLeft() {
    this.tabContents.nativeElement.scrollTo({
      left: this.tabContents.nativeElement.scrollLeft - this._scrollPos,
      behavior: "smooth"
    });

    // this._scrollContainer.scrollLeft += -Math.abs(this._scrollPos);
  }

  checkScrollBar(element, dir) {
    dir = dir === "vertical" ? "scrollTop" : "scrollLeft";

    var res = !!element[dir];

    if (!res) {
      element[dir] = 1;
      res = !!element[dir];
      element[dir] = 0;
    }
    return res;
  }

  validateTabData(val) {
    let valid = true;

    for (let i = 0; i < val.length; i++) {
      let item = val[i];
      if (!("header" in item)) {
        valid = false;
        break;
      }
    }
    return valid;
  }
}
