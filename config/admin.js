module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '92b6eadb79375b3d8e15f47716cda226'),
  },
});
