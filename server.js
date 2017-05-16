const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// api router
const apiRouter = require('./server/api');

// view render router
const viewRouter = (() => {
  const router = new Router();

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  return router;
})();

app.prepare().then(() => {
  const server = new Koa();

  server.use(bodyParser());

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(apiRouter.routes());
  server.use(viewRouter.routes());
  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
