import axios from "axios";

class Api {
    httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: "http://localhost"
        });
    }

    get(endpoint) {
        return this.httpClient.get(endpoint);
    }
}

export default new Api();