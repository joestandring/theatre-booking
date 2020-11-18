/**
 * Routes that can be accessed even without being logged in
 * @module routes/public
 * @author Joe Standring
 * @see routes/routes for where this module is imported
*/

import Router from 'koa-router'
import bodyParser from 'koa-body'
import { Accounts } from '../modules/accounts.js'
import { Plays } from '../modules/plays.js'
import getDates from '../utilities/dateoperations.js'

const publicRouter = new Router()
publicRouter.use(bodyParser({multipart: true}))

const dbName = 'website.db'

/**
 * Dislpay the home page
 * @name Home page
 * @route {GET} /
 */
publicRouter.get('/', async ctx => {
  const plays = await new Plays(dbName)
	try {
    const records = await plays.all()
    console.log(records[0])
    ctx.hbs.records = records
		await ctx.render('index', ctx.hbs)
	} catch(err) {
    console.error(err)
		await ctx.render('error', ctx.hbs)
	}
})

/**
 * Dislpay all plays
 * @name Home page
 * @route {GET} /plays
 */
publicRouter.get('/plays', async ctx => {
  const plays = await new Plays(dbName)
	try {
    const records = await plays.all()
    console.log(records[0])
    ctx.hbs.records = records
		await ctx.render('plays', ctx.hbs)
	} catch(err) {
    console.error(err)
		await ctx.render('error', ctx.hbs)
	}
})

/**
 * Displays information about a play
 * @name Play info
 * @route {GET} /plays/:id
 */
publicRouter.get('/plays/:id([0-9]{1,})', async ctx => {
  const plays = await new Plays(dbName)
  try {
    const records = await plays.getById(ctx.params.id)
    console.log(records[0])
    ctx.hbs.play = records[0]
    ctx.hbs.dates = getDates(records[0].first, records[0].last)
    await ctx.render('playinfo', ctx.hbs)
  } catch(err) {
    console.error(err)
    await ctx.render('error', ctx.hbs)
  }
})

/**
 * The user registration page
 * @name Register page
 * @route {GET} /register
 */
publicRouter.get('/register', async ctx => await ctx.render('register'))

/**
 * The script to process new user registrations
 * @name Register script
 * @route {POST} /register
 */
publicRouter.post('/register', async ctx => {
	const account = await new Accounts(dbName)
	try {
		// call the functions in the module
		await account.register(ctx.request.body.user, ctx.request.body.pass, ctx.request.body.email)
		ctx.redirect(`/login?msg=new user "${ctx.request.body.user}" added, you need to log in`)
	} catch(err) {
    console.error(err)
		ctx.hbs.msg = err.message
		ctx.hbs.body = ctx.request.body
		console.log(ctx.hbs)
		await ctx.render('register', ctx.hbs)
	} finally {
		account.close()
	}
})

publicRouter.get('/postregister', async ctx => await ctx.render('validate'))

/**
 * The script to validate users
 * @name Validation script
 * @route {GET} /validate/:user/:token
 */
publicRouter.get('/validate/:user/:token', async ctx => {
	try {
		console.log('VALIDATE')
		console.log(`URL --> ${ctx.request.url}`)
		if(!ctx.request.url.includes('.css')) {
			console.log(ctx.params)
			const milliseconds = 1000
			const now = Math.floor(Date.now() / milliseconds)
			const account = await new Accounts(dbName)
			await account.checkToken(ctx.params.user, ctx.params.token, now)
			ctx.hbs.msg = `account "${ctx.params.user}" has been validated`
			await ctx.render('login', ctx.hbs)
		}
	} catch(err) {
    console.error(err)
		await ctx.render('login', ctx.hbs)
	}
})

/**
 * The user login page
 * @name Login page
 * @route {GET} /login
 */
publicRouter.get('/login', async ctx => {
	console.log(ctx.hbs)
	await ctx.render('login', ctx.hbs)
})

/**
 * The user login script
 * @name Login script
 * @route {POST} /login
 */
publicRouter.post('/login', async ctx => {
	const account = await new Accounts(dbName)
	ctx.hbs.body = ctx.request.body
	try {
		const body = ctx.request.body
		await account.login(body.user, body.pass)
		ctx.session.authorised = true
		const referrer = body.referrer || '/secure'
		return ctx.redirect(`${referrer}?msg=you are now logged in...`)
	} catch(err) {
    console.error(err)
		ctx.hbs.msg = err.message
		await ctx.render('login', ctx.hbs)
	} finally {
		account.close()
	}
})

/**
 * The user logout script
 * @name Logout script
 * @route {POST} /logout
 */
publicRouter.get('/logout', async ctx => {
	ctx.session.authorised = null
	ctx.redirect('/?msg=you are now logged out')
})

/** Export for use in other modules */
export { publicRouter }
