var Handler = (function () {
    function Handler(room) {
        this.room = room;
    }
    Handler.prototype.init = function (data) {
        console.log(data);
    };
    Handler.prototype.i = function (data) {
        console.log(data);
    };
    return Handler;
})();
exports.Handler = Handler;
