class TrackerConfig {
    cookie: string;
    constructor() {
        this.cookie = 'cookie-name';
    }

    getCookieName() {
        return this.cookie;
    }

    setCookieName(_cookie: string) {
        this.cookie = _cookie;
    }
}

export { TrackerConfig as default };
