import Koa from 'koa';
import serve from 'koa-static';
import views from 'koa-views';
import session from 'koa-session';

import { apiRouter } from './routes/routes.js';

const app = new Koa();
app.keys = ['darkSecret'];

const defaultPort = 8080;
const port = process.env.PORT || defaultPort;

app.use(serve('public'));
app.use(session(app));
app.use(views('views', { extension: 'handlebars' }, { map: { handlebars: 'handlebars' } }));

app.use(async (ctx, next) => {
  ctx.hbs = {
    authorised: ctx.session.authorised,
    host: `https://${ctx.host}`,
  };
  Object.keys(ctx.query).forEach((key) => {
    ctx.hbs[key] = ctx.query[key];
  });
  await next();
});

app.use(apiRouter.routes(), apiRouter.allowedMethods());

app.listen(port);
