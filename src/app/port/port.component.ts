import { Component } from '@angular/core';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})

export class PortComponent {
  showImg :boolean = false;
source : string = '';
src2 = "assets/images/port2.png";
log(event:string){
   this.source =event;
   this.showImg = true;
 }
 hideImg(event:Event){
  event.target === document.getElementById('model') ? null :this.showImg = false;
}
}
