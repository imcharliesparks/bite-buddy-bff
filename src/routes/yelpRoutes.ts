import Router from 'koa-router'
import yelpController from '../controllers/yelpController'

const yelpRouter: Router = new Router({ prefix: '/yelp' })

yelpRouter.get('/', yelpController.main)
yelpRouter.get('/queryRestaurants', yelpController.queryRestaurants)

export default yelpRouter
