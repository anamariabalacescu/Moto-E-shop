import ServerProvider from "./ServerProvider";
import Product from "../schemas/Product";

export default class ProductProvider extends ServerProvider {
    getSubRoute() {
        return '/products'
    }

    /**
     * 
     * @param {string} id 
     * @returns {Product}
     */
    async getById(id) {
        const response = await this.get(this.getSubRoute() + `/${id}`)
        return Product.fromJson(response)
    }

    /**
     * 
     * @param {*} imageFile 
     * @param {Product} Product
     * @returns {Product}
     */
    async create(imageFile,product) {
        const response = await this.post(this.getSubRoute(), product.toJsonWithImageFile(imageFile))
        return Product.fromJson(response)
    }

    /**
     * 
     * @param {Product} Product
     * @returns {Product}
     */
    async update(product) {
        const response = await this.put(this.getSubRoute() + `/${product.id}`, product.toJson())
        return Product.fromJson(response)
    }

    /**
     * @param {*} imageFile
     * @param {Product} Product
     * @returns {Product}
     */
    async updateImage(imageFile, product) {
        const response = await this.put(this.getSubRoute() + `/image/${product.id}`, product.toJsonWithImageFile(imageFile))
        return Product.fromJson(response)
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
     * @returns {Array<Product>}
     */
    async getAll() {
        const response = await this.get(this.getSubRoute())
        return response.map(Product.fromJson)
    }
}

