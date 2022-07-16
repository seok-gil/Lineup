'use strict';

/**
 * fixed-event service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fixed-event.fixed-event');
