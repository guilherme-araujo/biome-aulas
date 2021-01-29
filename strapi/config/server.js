module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1341),
  url: '/aulas-api',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'cb30e3608997499aea022247f2ad5f26'),
    },
    url: 'http://localhost:1341/aulas-admin'
  },
});
