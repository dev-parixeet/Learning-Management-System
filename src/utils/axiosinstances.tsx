import axios, { AxiosInstance as AxiosInstanceType } from "axios";

const AxiosInstance: AxiosInstanceType = axios.create({
    baseURL: "http://localhost:4001/auth",
    headers: { 'Content-Type': 'application/json' },
});
export default AxiosInstance;