export const USER_TYPE = {
    PRODUCER: 'producer',
    ADMIN: 'admin',
    CLIENT: 'client'
}
export class User {
    id
    email
    name
    address
    type

    constructor({id, email, name, address, type, password}) {
        this.id = id
        this.email = email
        this.name = name
        this.address = address
        this.type = type
        this.password = password
    }

    /**
     * @param {*} json
     * @returns {User}
    */
    static fromJson(json) {
        if (!json) return null
        return new User({
            id: json.id,
            email: json.email,
            name: json.name,
            address: json.address,
            type: json.type
        })
    }

    toJson() {
        return {
            email: this.email,
            name: this.name,
            address: this.address,
            type: this.type,
            password: this.password
        }
    }
}