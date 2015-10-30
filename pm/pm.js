var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var connection_1 = require("../connection/connection");
var Pm = (function (_super) {
    __extends(Pm, _super);
    function Pm() {
        this.name = "PM";
        _super.call(this, this);
    }
    Pm.prototype.emission = function () {
    };
    Pm.prototype.sendAuth = function () {
        return true;
    };
    return Pm;
})(connection_1.Connection);
exports.Pm = Pm;
