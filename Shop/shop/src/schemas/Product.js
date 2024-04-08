export default class Product {
    id
    imageUrl
    price
    name
    type
    description
    producerId
    
    constructor({id, imageUrl, price, name, type, description, producerId }) {
        this.id = id
        this.imageUrl = imageUrl
        this.price = price
        this.name = name
        this.type = type
        this.description = description
        this.producerId = producerId
    }

    /**
     * @param {*} json 
     * @returns {Product}
     */
    static fromJson(json) {
        if (!json) return null
        return new Product({
            id: json.id,
            imageUrl: json.imageUrl,
            price: json.price,
            name: json.name,
            type: json.type,
            description: json.description,
            producerId: json.producerId
        })
    }

    toJson() {
        return {
            imageUrl: this.imageUrl,
            price: this.price,
            name: this.name,
            type: this.type,
            description: this.description,
            producerId: this.producerId
        }
    }

    toJsonWithImageFile = (imageFile) => {
        return {
            productImage: imageFile,
            price: this.price,
            name: this.name,
            type: this.type,
            description: this.description,
            producerId: this.producerId
        }
    }
}