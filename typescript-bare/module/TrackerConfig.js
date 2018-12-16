"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TrackerConfig = /** @class */ (function () {
    function TrackerConfig() {
        this.cookie = 'cookie-name';
    }
    TrackerConfig.prototype.getCookieName = function () {
        return this.cookie;
    };
    TrackerConfig.prototype.setCookieName = function (_cookie) {
        this.cookie = _cookie;
    };
    return TrackerConfig;
}());
exports.default = TrackerConfig;
