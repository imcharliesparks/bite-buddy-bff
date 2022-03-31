import { YelpRequestBody } from '../constants'

class YelpUtils {
  public generateUrl(req: YelpRequestBody): string {
    const { location, categories, sortBy } = req
    let reqUrl: string = `https://api.yelp.com/v3/businesses/search?location=${location}`
    if (categories) reqUrl += `&categories=${categories}`
    if (sortBy) reqUrl += `&sort_by=${req.sortBy}`
    return reqUrl
  }
}

export default new YelpUtils()
