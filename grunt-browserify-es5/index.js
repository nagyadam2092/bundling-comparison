var _ = require('lodash');
var TrackerConfig = require('./module/TrackerConfig');
var trackerConfig = new TrackerConfig();

trackerConfig.setCookieName('new-cookie-name');

document.write(_.snakeCase(trackerConfig.getCookieName()));
