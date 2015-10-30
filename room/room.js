var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var connection_1 = require("../connection/connection");
var events_1 = require("./events");
var Room = (function (_super) {
    __extends(Room, _super);
    function Room() {
        this.name = "inepeha";
        this.addr = "ws://s26.chatango.com:8080/";
        _super.call(this, this);
        this.handler = new events_1.Handler(this);
        console.log("Handler created");
    }
    Room.prototype.sendAuth = function () {
        return true;
    };
    Room.prototype.emission = function (data) {
        var event = data.split(":")[0];
        var rest = data.split(":").slice(1);
        var func = this.handler[event];
        if (typeof func === "function") {
            func.bind(this.handler)(rest);
        }
    };
    return Room;
})(connection_1.Connection);
exports.Room = Room;
new Room();
