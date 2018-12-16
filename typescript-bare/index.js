"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var TrackerConfig_1 = require("./module/TrackerConfig");
var trackerConfig = new TrackerConfig_1.default();
trackerConfig.setCookieName('new-cookie-name');
document.write(lodash_1.snakeCase(trackerConfig.getCookieName()));
