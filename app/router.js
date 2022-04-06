import EmberRouter from '@ember/routing/router';
import config from 'ember-data-attributes-bug-3-27/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
