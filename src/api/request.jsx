import axios from "axios";
const baseURL = "http://127.0.0.1:8000/api/";

const request = async (method, url, data = null) => {
    try {
        const response = await axios({
            method,
            url: baseURL + url,
            data,
            withCredentials: true,
        });
        // console.log(response);
        return response.data;
    } catch (error) {
        console.error(error.response.data.error);
        return Promise.reject(error.response.data.error);
    }
};

export const register = async (data) => {
    return request("post", "register/", data);
};
export const logIn = async (data) => {
    try {
        const response = await axios({
            method: "POST",
            url: baseURL + "login",
            data: data,
        });
        const userId = response.data.id;
        localStorage.setItem("userId", userId);
        return response.data;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

export const logout = async () => {
    localStorage.clear("userId");
    return request("get", "logout/");
};

export const fetchAllUsers = async () => {
    return request("get", "users");
};

export const fetchUserById = async () => {
    const userId = localStorage.getItem("userId");
    return request("get", `users/${userId}`);
};

export const updateUser = async (id, data) => {
    return request("put", `users/${id}`, data);
};
export const changePassword = async (id, data) => {
    return request("put", `users/password/${id}`, data);
};

export const deleteUser = async (id) => {
    return request("delete", `users/${id}`);
};

export const fetchAllOrders = async () => {
    return request("get", "orders");
};

export const fetchOrderById = async (id) => {
    return request("get", `orders/${id}`);
};

export const createOrder = async (data) => {
    return request("post", "orders", data);
};

export const updateOrder = async (id, data) => {
    return request("put", `orders/${id}`, data);
};

export const deleteOrder = async (id) => {
    return request("delete", `orders/${id}`);
};

export const fetchAllResumes = async () => {
    return request("get", "resumes");
};

export const fetchResumeById = async (id) => {
    return request("get", `resumes/${id}`);
};

export const createResume = async (data) => {
    return request("post", "resumes", data);
};

export const updateResume = async (id, data) => {
    return request("put", `resumes/${id}`, data);
};

export const deleteResume = async (id) => {
    return request("delete", `resumes/${id}`);
};

export const fetchAllTickets = async () => {
    return request("get", "tickets");
};

export const fetchTicketById = async (id) => {
    return request("get", `tickets/${id}`);
};

export const createTicket = async (data) => {
    return request("post", "tickets", data);
};

export const updateTicket = async (id, data) => {
    return request("put", `tickets/${id}`, data);
};

export const deleteTicket = async (id) => {
    return request("delete", `tickets/${id}`);
};
