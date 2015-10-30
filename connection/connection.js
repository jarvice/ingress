var ws = require("ws");
var Connection = (function () {
    function Connection(connection) {
        this.connection = connection;
        this.connect();
    }
    Connection.prototype.connect = function () {
        this.socket = new ws(this.connection.addr, { origin: "http://st.chatango.com" });
        this.attachListeners();
    };
    Connection.prototype.attachListeners = function () {
        var _this = this;
        this.socket.on("open", function () {
            console.log(_this.connection.name);
            _this.sendCommand("bauth", "inepaha", "", "", "", true);
        });
        this.socket.on("message", function (message, flags) {
            _this.connection.emission(message);
        });
        this.socket.on("close", function (code, message) {
            console.log("SOCKET CLOSED. CODE: " + code + " MESSAGE: " + message);
            _this.socket.removeAllListeners();
        });
    };
    Connection.prototype.sendCommand = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var boolean_value = args.slice(-1)[0];
        var commands = args.slice(0, -1);
        var ending = (boolean_value === true) ? "\0" : "\r\n";
        var data = commands.join(":") + ending;
        this.socket.send(data, function (err) {
            if (err) {
                console.log("SOCKET ERROR", err);
            }
        });
    };
    return Connection;
})();
exports.Connection = Connection;
