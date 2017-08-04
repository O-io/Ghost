var express = require('express');
var router = module.exports = express.Router();

/**
 * App Engine lifecycle event. See the following for more information:
 *
 * https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build#lifecycle_events
 */
router.get('/_ah/start', function (req, res) {
  res.status(200).send('ok').end();
});

/**
 * App Engine health check. See the following for configuring health check
 * behavior:
 *
 * https://cloud.google.com/appengine/docs/flexible/nodejs/configuring-your-app-with-app-yaml#health_checks
 */
router.get('/_ah/health', function (req, res) {
  res.status(200).send('ok').end();
});

/**
 * App Engine lifecycle event. See the following for more information:
 *
 * https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build#lifecycle_events
 */
router.get('/_ah/stop', function (req, res) {
  res.status(200).send('ok').end();
});