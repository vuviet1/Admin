import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:5000/api',

    // `method` là phương thức request được dùng khi tạo ra request.
    // method: 'get', // mặc định
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
}

export default request;