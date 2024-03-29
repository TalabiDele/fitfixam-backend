module.exports = async (ctx, next) => {
  if (!ctx.request.query["post.user"]) {
    return ctx.unauthorized("Please specify the post.author={id");
  }

  const targetUser = String(ctx.request.query["post.user"]);
  const loggedInUser = String(ctx.state.user.id);

  if (targetUser === loggedInUser) {
    return next();
  } else {
    return ctx.unauthorized("Target user is different from logged in user");
  }
};
