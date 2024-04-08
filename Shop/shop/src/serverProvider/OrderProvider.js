import ServerProvider from "./ServerProvider";
import Order  from "../schemas/Order";

export default class OrderProvider extends ServerProvider {
    getSubRoute() {
        return '/orders'
    }

    /**
     * 
     * @param {Order} Order
     * @returns {Order}
     */
    async create(order) {
        const response = await this.post(this.getSubRoute(), order.toJson())
        return Order.fromJson(response)
    }


    /**
     * 
     * @param {string} id 
     * @returns {string}
     */
    async delete(id) {
        return await this.delete(this.getSubRoute() + `/${id}`)
    }

    /**
     * 
     * @returns {Array<Order>}
     */
    async getAllByUser() {
        const response = await this.get(this.getSubRoute())
        return response.map(Order.fromJson)
    }
}