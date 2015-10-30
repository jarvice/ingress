import {Connection} from "../connection/connection"
import {Incommon} from "../interfaces/interfaces"
import {Handler} from "./events"



export class Room extends Connection implements Incommon {

    public name: string
    public addr: string
    public handler: Handler

    constructor() {

        this.name = "inepeha"
        this.addr = "ws://s26.chatango.com:8080/"
        super(this)
        this.handler = new Handler(this)
        console.log("Handler created")

    }

    sendAuth(): boolean {

        return true

    }

    emission(data: string) {
        let event: string = data.split(":")[0]
        let rest: string[] = data.split(":").slice(1)

        let func: Function = this.handler[event]

        if (typeof func === "function") {
            func.bind(this.handler)(rest)
        }
    }

}

new Room()
