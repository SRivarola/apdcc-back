import User from "./models/user.model.js";

export default class AuthMongo {
    constructor() {}

    async register(data){
        let user = await User.create(data)
        return {
            message: "User registered",
            response: user._id
        }
    }

    login() {
        return {
            message: "User logged in",
            response: true
        }
    }

    signout() {
        return {
            message: "User logged out",
            response: true
        }
    }

    async readOne(mail) {
        let user = await User.findOne({mail: mail});
        if(user){
            return user;
        } else {
            return null
        }
    }

    async readByCountry(id) {
        let one = await User.findOne({ country: id })
        if (one) {
            return one;
        } else {
            return null;
        }
    }

    async readById(id) {
        let user = await User.findById(id);
        if(user) {
            return user;
        } else {
            return null
        }
    }


    async readAll(query, data) {
        let all = await User.paginate(query, data);
        if(all.docs.length > 0) {
            return all
        } else {
            return {
                message: "Users found",
                response: {
                    docs: [],
                    totalDocs: 0,
                    limit: 10,
                    totalPages: 0,
                    page: 0,
                    pagingCounter: 0,
                    hasPrevPage: false,
                    hasNextPage: false,
                    prevPage: null,
                    nextPage: null
                }
            }
        }
    }

    async update(id, data) {
        let user = await User.findByIdAndUpdate(id, data, { new: true });
        if(user) {
            return {
                message: "updated successfully!",
                response: user
            };
        } else {
            return null;
        };
    }

    async delete(id) {
        let one = await User.findByIdAndDelete(id);
        if(one) {
            return {
                message: 'user deleted',
                response: one
            }
        } else {
            return null;
        }
    }

}