"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    let entity;
    const { user } = ctx.state;
    const { post } = ctx.request.body;
    // const found = await strapi.services.postlikes.findOne({
    //   user: user.id,
    //   post,
    // });

    // if (found) {
    //   ctx.throw(400, "You already liked this post");
    // }
    return sanitizeEntity(entity, { model: strapi.models.post_likes });
  },
};
