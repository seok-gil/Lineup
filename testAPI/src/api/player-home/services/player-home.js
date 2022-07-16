'use strict';

/**
 * player-home service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::player-home.player-home');
