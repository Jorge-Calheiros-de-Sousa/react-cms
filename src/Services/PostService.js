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

    async show(id) {
        try {
            const response = await Api.get(`/api/posts/${id}`);
            return [response.data, false];
        } catch (error) {
            return [null, false];
        }
    }

    async create(data) {
        try {
            const response = await Api.post(`/api/posts/`, data);
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }

    async update(id, data) {
        try {
            const response = await Api.put(`/api/posts/${id}`, data);
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }

    async destroy(id) {
        try {
            const response = await Api.delete(`/api/posts/${parseInt(id)}`);
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }
}

export default new PostService();