import axios from 'axios';


// Client-side API requests hit the local Next.js proxy route middleware
const apiClient = axios.create({
    baseURL: '/api',
});

// Avoid setting 'Content-Type' globally here so that FormData (multipart) is handled correctly automatically by axios
// axios will set it to 'multipart/form-data' automatically when it sees FormData

export default apiClient;
