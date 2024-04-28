import { Hono } from 'hono'
import { renderer } from './renderer'
import { CookieStore, sessionMiddleware } from 'hono-sessions'

const app = new Hono()

app.use(renderer)

const middleware = sessionMiddleware({
  store: new CookieStore(),
  expireAfterSeconds: 100000,
  cookieOptions: {
    httpOnly: true,
    maxAge: 100000,
    path: "/",
    sameSite: "Strict",
    secure: true,
  },
});
app.use(middleware as any)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})

export default app
