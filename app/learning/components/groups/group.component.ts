import { Component, Input } from '@angular/core';

import { Group } from '../../models/group.interface';

@Component({
    selector: 'group',
    styleUrls: ['group.component.scss'],
    templateUrl: 'group.component.html'
})
export class GroupComponent {
    isAllChecked:boolean;

    constructor(){
        this.isAllChecked = false;
    }

    @Input()
    group:Group

    checkAll(e){
        this.group.devices.map(element => element.active = !this.isAllChecked);
        e.stopPropagation()
    }

    checkSelected(device) {
        let selectedFlag:number = 0;

        setTimeout(()=>{
            this.group.devices.map(element => {
                if(element.active) selectedFlag ++;
            });
            this.isAllChecked = selectedFlag === this.group.devices.length ? true: false;
        },0);
    }
}
