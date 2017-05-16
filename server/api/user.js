/**
 * Created by axetroy on 17-5-16.
 */

const Router = require('koa-router');
const resCreator = require('../response');

const userRouter = new Router();

// get user profile,
// @token()
userRouter.get('/', async ctx => {
  ctx.body = {
    user: {
      name: 'axetroy'
    }
  };
});

// login
userRouter.post('/', async ctx => {
  const { username } = ctx.request.body;
  if (username) {
    ctx.body = resCreator.success({ data: { username } });
  } else {
    ctx.body = resCreator.error({ msg: 'Invalid username' });
  }
});

// update user profile
// @token()
userRouter.put('/', async ctx => {
  ctx.body = { error: 'register fail' };
});

// ================== admin ==================
const adminRouter = new Router();

// get a user profile
adminRouter.get('/:id', async ctx => {
  ctx.body = '123123';
});

// create a user account
adminRouter.post('/:id', async ctx => {
  ctx.body = '123123';
});

// update a user profile
adminRouter.put('/:id', async ctx => {
  ctx.body = '123123';
});

// delete a user
adminRouter.delete('/:id', async ctx => {
  ctx.body = '123123';
});

userRouter.use('/admin', adminRouter.routes(), adminRouter.allowedMethods());

module.exports = userRouter;
