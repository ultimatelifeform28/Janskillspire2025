
// Create an Axios instance with a base URL for the backend server
const api = axios.create({
  baseURL: "http://localhost:5002", // Adjust this if your backend is hosted elsewhere
});

// ====== API Calls for Client Management ======

// Fetch all clients from the backend
export const getClient = () => api.get("/clients");

// Add a new client by sending form data to the backend
export const AddClient = (newClient) => api.post("/AddClient", newClient);

// Fetch a single client's details by ID
export const getClientById = (id) => api.get(`/clients/${id}`);

// Update a client's info by ID with the updated form data
export const updateClient = (id, updatedClient) => api.put(`/clients/${id}`, updatedClient);

// Delete a client profile by ID
export const deleteClient = (id) => api.delete(`/clients/${id}`);




