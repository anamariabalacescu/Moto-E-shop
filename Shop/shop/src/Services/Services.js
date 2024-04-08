import UserProvider  from '../serverProvider/UserProvider'
import ProductProvider from '../serverProvider/ProductProvider'
import OrderProvider from '../serverProvider/OrderProvider'
import MotorTypeProvider from '../serverProvider/MotorTypeProvider'
import ReviewProvider from '../serverProvider/ReviewProvider'

export const Services = {
    User: new UserProvider(),
    Product: new ProductProvider(),
    Order: new OrderProvider(),
    MotorType: new MotorTypeProvider(),
    Review: new ReviewProvider()
}
