export default class Review {
    id
    description
    userId
    rating
    productId

    constructor({ id, description, userId, rating, productId }) {
        this.id = id
        this.description = description
        this.userId = userId
        this.rating = rating
        this.productId = productId
    }

    /**
     * @param {*} json
     * @returns {Review}
     */
    static fromJson(json) {
        if (!json) return null
        return new Review({
            id: json.id,
            description: json.description,
            userId: json.userId,
            rating: json.rating,
            productId: json.productId
        })
    }

    toJson() {
        return {
            description: this.description,
            userId: this.userId,
            rating: this.rating,
            productId: this.productId
        }
    }
}