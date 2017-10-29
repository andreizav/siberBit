import { Component, OnInit } from '@angular/core';

import { LearningService } from './learning.service';

import { Device } from './models/device.interface';
import { Protocol } from './models/protocol.interface';
import { Time } from './models/time.interface';
import { Group } from './models/group.interface';

@Component({
  selector: 'learning',
  styleUrls: ['learning.component.scss'],
  templateUrl: 'learning.component.html'
})
export class LearningComponent implements OnInit{
    groups:Group[];
    protocols:Protocol[];
    times:Time[];
    currentPeriod:Time;
    data:any;

    constructor(private service:LearningService) {     }

    ngOnInit() {
        this.data = {};

        this.service.getData('device_groups').subscribe(data => {
            this.groups = data;
            this.data.groups = this.groups;
        });

        this.service.getData('protocols').subscribe(data => {
            this.protocols = data;
            this.data.protocols = this.protocols;
        });

        this.service.getData('times').subscribe(data => {
            this.times = data;
            this.currentPeriod = this.times[0];
            this.data.currentPeriod = this.currentPeriod;
        });
    }

    setCurrentPeriod(period:Time) {
        this.currentPeriod = period;
        this.data.currentPeriod = this.currentPeriod;
    }

    clearData() {
        this.currentPeriod = this.times[0];
        this.data.currentPeriod = this.currentPeriod;

        this.groups.map(group =>{
            group.devices.map(device =>device.active = false);
        });

        this.protocols.map(protocol =>protocol.active = false);
    }
}
