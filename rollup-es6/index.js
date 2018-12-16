import { snakeCase } from 'lodash-es';
import TrackerConfig from './module/TrackerConfig';
let trackerConfig = new TrackerConfig();

trackerConfig.setCookieName('new-cookie-name');

document.write(snakeCase(trackerConfig.getCookieName()));
