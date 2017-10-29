import { Component, Input } from '@angular/core';
import { Protocol } from '../../models/protocol.interface';

@Component({
  selector: 'protocol',
  styleUrls: ['protocol.component.scss'],
  templateUrl: 'protocol.component.html'
})
export class ProtocolComponent {

  @Input()
  protocols:Protocol[];

  toogleCheck(flag) {
    console.log(flag)
    // if (checkedIn) {
    //   this.detail.checkInDate = Date.now();
    // }
  }
}
