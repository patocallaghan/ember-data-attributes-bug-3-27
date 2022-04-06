import Application from 'ember-data-attributes-bug-3-27/app';
import config from 'ember-data-attributes-bug-3-27/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
