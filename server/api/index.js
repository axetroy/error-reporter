/**
 * Created by axetroy on 17-5-16.
 */

const Router = require('koa-router');
const userRouter = require('./user');

const apiRouter = new Router({ prefix: '/api/v1' });

apiRouter.use('/user', userRouter.routes(), userRouter.allowedMethods());

apiRouter.get('/', async ctx => {
  ctx.body = { author: 'Axetroy' };
});

// not match api
apiRouter.get('*', async ctx => {
  ctx.body = { error: 'unknown api' };
});

module.exports = apiRouter;
