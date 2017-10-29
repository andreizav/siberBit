import { Device } from './device.interface';

export interface Group {
    id: number,
    name: string,
    devices: Device[]
}