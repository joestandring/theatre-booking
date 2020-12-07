/**
 * Generate JSDocs documentation
 * @module docs
 * @author Joe Standring
 * @see docs/jsdocs for the JSDocs documentation served here
 */

import Koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';

const app = new Koa();

// Serve JSDocs
app.use(mount('/', serve('./docs/jsdoc')));

const port = process.env.PORT || 3030;
app.listen(port);
