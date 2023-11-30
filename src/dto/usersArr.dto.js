export default class {
    constructor(arr) {
        this.arr = arr.map((item) => {
            const { first_name, last_name, mail, role, country, _id } = item
            const newItem = {
                _id,
                first_name,
                last_name,
                mail,
                role,
                country
            }
            return newItem
        })
    }
}