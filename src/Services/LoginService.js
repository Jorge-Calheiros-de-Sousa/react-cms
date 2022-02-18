import Api from "./Api";

class LoginService {
    async authenticate() {
        try {
            let data =
            {
                "email": "magdalen.schultz@example.org",
                "password": "password",
                "device_name": "insominia"
            }
            const response = await Api.post("/api/login", data)
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }
}

export default new LoginService();