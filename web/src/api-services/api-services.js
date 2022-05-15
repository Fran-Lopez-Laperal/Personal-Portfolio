import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4001",
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error(error)
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export function getApplies() {
  return http.get('/api/applys')
}

export function newApply(apply) {
  const data = new FormData()

  data.append('offerTitle', apply.offerTitle)
  data.append('typeJob', apply.typeJob)
  data.append('business', apply.business)
  data.append('description', apply.description)
  data.append('location', apply.location)
  data.append('avatar', apply.image)

 
  return http.post('/api/applys', data)
}