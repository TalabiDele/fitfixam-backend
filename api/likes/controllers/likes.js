const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    const { user } = ctx.state;
    const { post } = ctx.request.body;

    if (typeof post !== "number") {
      ctx.throw(400, "Please only pas id for the post");
    }

    const realPost = await strapi.services.post.findOne({
      id: post,
    });

    if (!realPost) {
      ctx.throw(400, "This post doesn't exist");
    }

    const found = await strapi.services.likes.findOne({
      user: user.id,
      post,
    });

    if (found) {
      ctx.throw(400, "You already liked this post");
    }

    if (ctx.is("multipart")) {
      ctx.throw(400, "Only make JSON requests");
    } else {
      entity = await strapi.services.likes.create({ post, user });
    }

    // Update the likes counter
    const { likes } = realPost;
    const update = await starpi.services.post.update(
      {
        id: post,
      },
      {
        likes: likes + 1,
      }
    );

    return sanitizeEntity(entity, { model: strapi.models.likes });
  },
};
