'use strict';

/**
 * fixed-event router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fixed-event.fixed-event');
