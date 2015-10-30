import {Room} from "../room/room"
import {Pm} from "../pm/pm"
import ws = require("ws")

export class Connection {

    private connection: Room | Pm
    private socket: ws

    constructor(connection: Room | Pm) {
        this.connection = connection
        this.connect()
    }

    connect(): void {
        this.socket = new ws(this.connection.addr, {origin: "http://st.chatango.com"})
        this.attachListeners()
    }

    attachListeners(): void {
        this.socket.on("open", () => {
            console.log(this.connection.name)
            this.sendCommand("bauth", "inepaha", "", "", "", true) // ("bauth:inepaha:::\x00")

        })

        this.socket.on("message", (message: any, flags) => {
            this.connection.emission(message)

        })

        this.socket.on("close", (code: number, message: string) => {
            console.log(`SOCKET CLOSED. CODE: ${code} MESSAGE: ${message}`)
            this.socket.removeAllListeners()

        })
    }

    sendCommand(...args: any[]): void {

        let boolean_value: boolean = args.slice(-1)[0]
        let commands: string[] = args.slice(0, -1)
        let ending = (boolean_value === true) ? "\0" : "\r\n";

        let data = commands.join(":") + ending

        this.socket.send(data, (err) => {
            if (err) {
                console.log("SOCKET ERROR", err)
            }
        })



    }

}
