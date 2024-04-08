export default class Order {
    id
    productList
    userId

    constructor({ id, productList, userId }) {
        this.id = id
        this.productList = productList
        this.userId = userId
    }

    /**
     * @param {*} json
     * @returns {Order}
     */
    static fromJson(json) {
        if (!json) return null
        return new Order({
            id: json.id,
            productList: json.productList,
            userId: json.userId
        })
    }

    toJson() {
        return {
            productList: this.productList,
            userId: this.userId
        }
    }
}