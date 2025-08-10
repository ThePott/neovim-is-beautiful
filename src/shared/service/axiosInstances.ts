import axios from "axios";

export const axiosNeon = axios.create({
  baseURL: 'http://localhost:3456',
});