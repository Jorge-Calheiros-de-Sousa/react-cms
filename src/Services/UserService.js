import Api from "./Api";

class UserService {
    async index() {
        try {
            const response = await Api.get("/api/users/");

            return [response.data, null]
        } catch (error) {
            return [null, error]
        }
    }

    async create(data) {
        try {
            const response = await Api.post("/api/users", data);
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }
    async update(data, id) {
        try {
            const response = await Api.put(`/api/users/${id}`, data);
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }
}

export default new UserService();