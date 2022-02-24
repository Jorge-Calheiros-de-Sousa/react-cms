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
}

export default new UserService();