import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
scrollPos=30;
  tabData = Array(6)
    .fill(0)
    .map((itm, i) => {
      return {
        header: `Tab heading ${i + 1}`
      };
    });
  name = 'Angular ' + VERSION.major;

  getSelectedTabData(e:any){
    console.log(e);
  }
}
