module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
  },
  // ...

  // email: {
  //   provider: "sendmail",
  //   settings: {
  //     defaultFrom: "no-reply@fitfixam.com",
  //     defaultReplyTo: "info@fitfixam.com",
  //   },
  // },

  // email: {
  //   provider: "mailgun",
  //   providerOptions: {
  //     apiKey: env("MAILGUN_API_KEY"),
  //     domain: env("MAILGUN_DOMAIN"), //Required if you have an account with multiple domains 7e10407b24f5148b3a2a3238fca40af9-4534758e-74cc897e
  //     // host: env("MAILGUN_HOST", "api.mailgun.net"), f2dc897b61675c2dc1fd77a2fd49586b-27a562f9-107f1cbd //Optional. If domain region is Europe use 'api.eu.mailgun.net'
  //   },
  //   settings: {
  //     defaultFrom: "no-reply@fitfixam.com",
  //     defaultReplyTo: "info@fitfixam.com",
  //   },
  // },

  email: {
    provider: "sendinblue",
    providerOptions: {
      sendinblue_api_key: env("SIB_API_KEY"),
      sendinblue_default_replyto: env("SIB_DEFAULT_REPLY_TO"),
      sendinblue_default_from: env("SIB_DEFAULT_FROM"),
      sendinblue_default_from_name: env("SIB_DEFAULT_FROM_NAME"),
    },
  },
});
