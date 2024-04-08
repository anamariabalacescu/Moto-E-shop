import ServerProvider from "./ServerProvider";
import { User } from "../schemas/User";

export default class UserProvider extends ServerProvider  {
    getSubRoute() {
        return '/users'
    }

    getMe(token) {
        return this.get(this.getSubRoute() + '/tokenLogin', token)
    }

    /**
     * 
     * @param {string} email 
     * @param {string} password 
     * @returns {User}
     */
    async login(email, password) {
        const response = await this.post(this.getSubRoute() + '/login', { email, password })
        return User.fromJson(response)
    }

    /**
     * 
     * @param {User} User
     * @returns {User}
     */
    async register(user) {
        const response = await this.post(this.getSubRoute() + '/register', user.toJson())
        return User.fromJson(response)
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
     * @param {string} id 
     * @returns {Array<User>}
     */
    async getAll() {
        const response = await this.get(this.getSubRoute())
        return response.map(User.fromJson)
    }

    async getAllProducers () {
        const response = await this.get(this.getSubRoute() + '/producers')
        return response.map(User.fromJson)
    }

    async getProducerById(id) {
        const response = await this.get(this.getSubRoute() + `/producers/${id}`)
        return User.fromJson(response)
    }
}