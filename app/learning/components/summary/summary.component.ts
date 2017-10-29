import { Component, Input, Output, EventEmitter } from '@angular/core';
import {URLSearchParams} from '@angular/http';
import { LearningService } from '../../learning.service';

@Component({
  selector: 'summary',
  styleUrls: ['summary.component.scss'],
  templateUrl: 'summary.component.html'
})
export class SummaryComponent {

  constructor(private service:LearningService){}

  @Input()
  data

  sentData() {
    this.service.sentData(this.generateDataToSent(this.data));
  }

  generateDataToSent(data){
    let params = new URLSearchParams();
    let arrGroups:string[] = [];
    let arrProtocols:string[] = [];

    this.data.groups.map(group =>{
        group.devices.map(device =>{if(device.active) arrGroups.push(device.id);});
    });

    params.set('devices', arrGroups.toString());
    this.data.protocols.map(protocol =>{if(protocol.active) arrProtocols.push(protocol.id);});

    params.set('protocols', arrProtocols.toString());
    params.set('times', data.currentPeriod.id);
    
    return params;
  }

  @Output()
  clearData = new EventEmitter();
  clear() {
    this.clearData.emit();
  }

  checkToHidden(elements) {
    let selectedFlag:boolean = true;
    
    elements.map(element => {if(element.active) selectedFlag = false;});
    return selectedFlag;
  }

  checkToHiddenGroups(elements) {
    let selectedFlag:boolean = true;
    
    elements.map(element => {
      element.devices.map(device => {if(device.active) selectedFlag = false;});
    });
    return selectedFlag;
  }
}
