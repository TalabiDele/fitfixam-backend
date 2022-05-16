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

    const realPost = await strapi.services.posts.findOne({
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
    // const { likes } = realPost;
    // const update = await strapi.services.posts.update(
    //   {
    //     id: post,
    //   },
    //   {
    //     likes: likes + 1,
    //   }
    // );

    return sanitizeEntity(entity, { model: strapi.models.likes });
  },

  async delete(ctx) {
    const { user } = ctx.state;
    const { postId } = ctx.params;

    const post = parseInt(postId);

    if (typeof post !== "number") {
      ctx.throw(400, "Please only use the id of the post");
    }

    const entity = await strapi.services.likes.delete({
      post,
      user: user.id,
    });

    if (entity.length) {
      const { likes } = entity[0].post;
      const updatePost = await strapi.services.posts.update(
        {
          id: post,
        },
        {
          likes: likes - 1,
        }
      );

      return sanitizeEntity(entity[0], { model: strapi.models.likes });
    }
  },
};
