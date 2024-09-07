import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

const api = axios.create(config);

export default api;
