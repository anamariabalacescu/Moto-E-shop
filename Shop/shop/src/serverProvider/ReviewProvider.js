import ServerProvider from "./ServerProvider";
import Review from "../schemas/Review";

export default class ReviewProvider extends ServerProvider {
    getSubRoute() {
        return '/reviews'
    }

    /**
     * 
     * @param {string} productId
     * @returns {Review}
     */
    async getByProductId(productId) {
        const response = await this.get(this.getSubRoute() + `/${productId}`)
        return Review.fromJson(response)
    }

    /**
     * 
     * @param {Review} Review
     * @returns {Review}
     */
    async create(review) {
        const response = await this.post(this.getSubRoute(), review.toJson())
        return Review.fromJson(response)
    }

}