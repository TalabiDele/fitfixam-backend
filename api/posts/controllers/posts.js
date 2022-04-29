const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async comments(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.comments.create(data, { files });
    } else {
      ctx.request.body.user = ctx.state.user.id;
      ctx.request.body.post = ctx.params.id;
      entity = await strapi.services.comments.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.comments });
  },

  // async create(ctx) {
  //   let entity;
  //   if (ctx.is("multipart")) {
  //     const { data, files } = parseMultipartData(ctx);
  //     entity = await strapi.services.posts.create(data, { files });
  //   } else {
  //     ctx.request.body.user = ctx.state.user.id;
  //     entity = await strapi.services.posts.create(ctx.request.body);
  //   }
  //   return sanitizeEntity(entity, { model: strapi.models.posts });
  // },

  async me(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    const data = await strapi.services.posts.find({ user: user.id });

    if (!data) {
      return ctx.notFound();
    }

    return sanitizeEntity(data, { model: strapi.models.posts });
  },
};
