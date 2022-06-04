"use strict";

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
  /**
   * Sends an email to the recipient in the body of the request
   */
  send: async (ctx) => {
    const body = ctx.request.body;
    const sendTo = body.email;
    strapi.log.debug(`Trying to send an email to ${sendTo}`);

    // try {
    //   const emailOptions = {
    //     to: sendTo,
    //     subject: "This is a test",
    //     html: `<h1>Welcome!</h1><p>This is a test HTML email.</p>`,
    //   };
    //   await strapi.plugins["email"].services.email.send(emailOptions);
    //   strapi.log.debug(`Email sent to ${sendTo}`);
    //   ctx.send({ message: "Email sent" });
    // } catch (err) {
    //   strapi.log.error(`Error sending email to ${sendTo}`, err);
    //   ctx.send({ error: "Error sending email" });
    // }

    await strapi.plugins["email"].services.email.send({
      from: "<info@fitfixam.com>",
      to: sendTo,
      to: "fitfixam@gmail.com",
      subject: "Hello",
      text: "Testing some Mailgun awesomeness!",
    });

    // const emailTemplate = {
    //   subject: "Welcome <%= user.username %>",
    //   text: `Welcome on Fitfixam!
    //       Your account is now linked with: <%= user.email %>.`,
    //   html: `<h1>Welcome on Fitfixam!</h1>
    //       <p>Your account is now linked with: <%= user.email %>.<p>`,
    // };

    // await strapi.plugins.email.services.email.sendTemplatedEmail(
    //   {
    //     to: sendTo,
    //     // from: is not specified, so it's the defaultFrom that will be used instead
    //   },
    //   emailTemplate,
    //   {
    //     user: _.pick(user, ["username", "email", "username"]),
    //   }
    // );
  },
};
