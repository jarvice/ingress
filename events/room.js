var Handler = (function () {
    function Handler() {
    }
    Handler.prototype.i = function (data) {
        console.log(data);
    };
    return Handler;
})();
exports.Handler = Handler;
