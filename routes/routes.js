/**
 * Set up routing for the application
 * @module routes/routes
 * @author Joe Standring
 * @see routes/public for public routes
 * @see routes/secure for secure routes
*/

import Router from 'koa-router';

import { publicRouter } from './public.js';
import { secureRouter } from './secure.js';

const apiRouter = new Router();

const nestedRoutes = [publicRouter, secureRouter];
for (const router of nestedRoutes) apiRouter.use(router.routes(), router.allowedMethods());

/** Export for use in other modules */
export { apiRouter };
