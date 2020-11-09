/**
 * Routes that can only be accessed when logged in
 * @module routes/secure
 * @author Joe Standring
 * @see routes/routes for where this module is imported
*/

import Router from 'koa-router'

const secureRouter = new Router({ prefix: '/secure' })

/**
 * The secure page
 * @name Secure page
 * @route {GET} /
 */
secureRouter.get('/', async ctx => {
	try {
		console.log(ctx.hbs)
		if(ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure')
		await ctx.render('secure', ctx.hbs)
	} catch(err) {
		ctx.hbs.error = err.message
		await ctx.render('error', ctx.hbs)
	}
})

/** Export for use in other modules */
export { secureRouter }
