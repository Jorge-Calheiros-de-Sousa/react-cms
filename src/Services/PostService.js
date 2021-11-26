import Api from "./Api";


class PostService {
    async index() {
        try {
            const response = await Api.get("/api/posts");
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }
}

export default new PostService();