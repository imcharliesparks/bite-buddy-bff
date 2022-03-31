import compose from 'koa-compose'
import yelpRouter from './yelpRoutes'

export default compose([yelpRouter.middleware()])
