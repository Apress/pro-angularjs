angular.module("customServices", [])
    .service("logService", function () {
        return {
            messageCount: 0,
            log: function (msg) {
                console.log("Debug: " + (this.messageCount++) + " " + msg);
            }
        };
    });
