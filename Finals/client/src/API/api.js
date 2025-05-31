import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5002",
})

export const getClient = () => api.get("/clients");
export const AddClient = (newClient) => api.post("/AddClient", newClient); 
export const getClientById = (id) => api.get(`/clients/${id}`);
export const updateClient = (id, updatedClient) => api.put(`/clients/${id}`, updatedClient);
export const deleteClient = (id) => api.delete(`/clients/${id}`);




