export default class {
    constructor(arr) {
        this.arr = arr.map((item) => {
            const { first_name, last_name, mail, role, country_id, _id, phone } = item
            const first = cadena.slice(0, 3);
            const second = cadena.slice(3, 7);
            const third = cadena.slice(7);
            const newItem = {
                _id,
                first_name,
                last_name,
                mail,
                role,
                country_id, 
                phone: `${first}-${second}-${third}`
            }
            return newItem
        })
    }
}