import { Context } from 'koa'
import dotenv from 'dotenv'
import axios from 'axios'
import { YelpRequestBody, YelpSortBy } from '../shared/constants'
import YelpUtils from '../shared/utils/YelpUtils'
dotenv.config()

// TODO: Pull all categories
// TODO: Sort by reviews
// TODO: Add error reporting
// TODO: add some kind of before all middleware to generate URL
// TODO: Add check for isClosed

const yelpApiReqBody = {
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
}

class YelpController {
  public main(ctx: Context) {
    ctx.status = 200
    ctx.body = {
      status: 'here',
    }
  }

  public async queryRestaurants(ctx: Context) {
    const req = ctx.request.body as YelpRequestBody
    const reqUrl: string = YelpUtils.generateUrl(req)
    try {
      const { data } = await axios.get(reqUrl, yelpApiReqBody)
      ctx.status = 200
      ctx.body = data
    } catch (e) {
      ctx.status = 400
      ctx.body = e
    }
  }
}

const yelpController: YelpController = new YelpController()
export default yelpController
