export default class MotorType {
    id
    type

    constructor({ id, type }) {
        this.id = id
        this.type = type
    }

    /**
     * @param {*} json 
     * @returns {MotorType}
     */
    static fromJson(json) {
        if (!json) return null
        return new MotorType({
            id: json.id,
            type: json.type
        })
    }
}