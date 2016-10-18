angular.module("customServices", [])
    .provider("logService", function () {
        var counter = true;
        var debug = true;
        return {
            messageCounterEnabled: function (setting) {
                if (angular.isDefined(setting)) {
                    counter = setting;
                    return this;
                } else {
                    return counter;
                }
            },
            debugEnabled: function (setting) {
                if (angular.isDefined(setting)) {
                    debug = setting;
                    return this;
                } else {
                    return debug;
                }
            },
            $get: function ($log) {
                return {
                    messageCount: 0,
                    log: function (msg) {
                        if (debug) {
                            $log.log("(LOG"
                                + (counter ? " + " + this.messageCount++ + ") " : ") ")
                                + msg);
                        }
                    }
                };
            }
        }
    });
