'use strict';

/**
 * admin-home service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::admin-home.admin-home');
