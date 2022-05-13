module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
    gzip: {
      enabled: true,
      options: {
        br: false,
      },
    },
    settings: {
      cors: {
        origin: ["*"], //allow all
      },
    },

    settings: {
      parser: {
        enabled: true,
        multipart: true,
        formidable: {
          maxFileSize: 200 * 1024 * 1024, // Defaults to 200mb
        },
      },
    },
  },

  // settings: {
  //   cors: {
  //     origin: ['*'], //allow all origins
  //     headers: ['*'], //allow all headers
  //   },
  // },

  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
