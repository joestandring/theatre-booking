/**
 * Routes that can only be accessed when logged in
 * @module routes/secure
 * @author Joe Standring
 * @see routes/routes for where this module is imported
*/

import Router from 'koa-router';
import { Plays } from '../modules/plays.js';

const secureRouter = new Router({ prefix: '/secure' });
const dbName = 'website.db';

/**
 * The secure page
 * @name Secure page
 * @route {GET} /
 */
secureRouter.get('/', async (ctx) => {
  try {
    if (ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure');
    await ctx.render('secure', ctx.hbs);
  } catch (err) {
    ctx.hbs.error = err.message;
    await ctx.render('error', ctx.hbs);
  }
});

/**
 * The user's cart
 * @name Cart
 * @Route {GET} /cart
 */
secureRouter.get('/cart', async (ctx) => {
  try {
    if (ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure');
    await ctx.render('cart', ctx.hbs);
  } catch (err) {
    ctx.hbs.error = err.message;
    await ctx.render('error', ctx.hbs);
  }
});

/**
 * Script to subtract remaining tickets from shows on purchase
 * @name Cart update
 * @route {POST} /cart
 */
secureRouter.post('/cart', async (ctx) => {
  const play = await new Plays(dbName);

  try {
    if (ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure');
    const temp = await play.purchase(
      ctx.request.body.play,
      ctx.request.body.rear,
      ctx.request.body.circle,
      ctx.request.body.front,
    );
    console.log(temp);
    ctx.redirect('/?msg=Thank you for your purchase');
  } catch (err) {
    console.error(err);
    ctx.hbs.msg = err.message;
    ctx.hbs.body = ctx.request.body;
  }
});

/** Export for use in other modules */
export { secureRouter };
