/**
 * Created by axetroy on 17-5-9.
 */
module.exports = {
  plugins: [
    require('postcss-easy-import')({ prefix: '_' }), // keep this first
    require('autoprefixer')(
      {
        /* ...options */
      }
    ) // so imports are auto-prefixed too
  ]
};
