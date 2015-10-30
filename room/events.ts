import {Room} from "./room"
import {Connection} from "../connection/connection"

export class Handler  {

    private room: Room
    public name: string
    public addr: string

    constructor(room: Room) {
        this.room = room
    }

    init(data: string[]) {
        console.log(data)
    }



    i(data: string[]): void {
        console.log(data)
    }


}
