import {Connection} from "../connection/connection"
import {Incommon} from "../interfaces/interfaces"
import {Handler} from "../events/room"

// testing github on dev branch only... I hope.

export class Room extends Connection implements Incommon {

    public name: string
    public addr: string
    private handler: Handler

    constructor() {

        this.name = "inepeha"
        this.addr = "ws://s26.chatango.com:8080/"
        this.handler = new Handler()

        super(this)

    }

    emission(data: string) {
        let event: string = data.split(":")[0]
        let rest: string[] = data.split(":").slice(1)

        let func: Function = this.handler[event]

        if (typeof func === "function") {
            func(rest)
        }
    }

}

new Room()
