function TrackerConfig() {
    this.cookie = 'cookie-name';
}

TrackerConfig.prototype.getCookieName = function getCookieName() {
    return this.cookie;
};

TrackerConfig.prototype.setCookieName = function setCookieName(_cookie) {
    this.cookie = _cookie;
};

module.exports = TrackerConfig;
