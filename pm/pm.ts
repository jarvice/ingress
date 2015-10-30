import {Connection} from "../connection/connection"
import {Incommon} from "../interfaces/interfaces"

export class Pm extends Connection implements Incommon {

    public name: string
    public addr: string

    constructor() {
        this.name = "PM"
        super(this)



    }

    emission() {

    }

    sendAuth(): boolean {
        return true
    }

}
