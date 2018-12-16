class TrackerConfig {
    constructor() {
        this.cookie = 'cookie-kkk';
    }

    getCookieName() {
        return this.cookie;
    }

    setCookieName(_cookie) {
        this.cookie = _cookie;
    }
}

export { TrackerConfig as default };
