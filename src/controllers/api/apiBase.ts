import axios, { AxiosInstance } from "axios";

export abstract class ApiBase {
  constructor() {
    this.axiosInstance = this.setupClient();
  }

  private setupClient() {
    const axiosInstance = axios.create();
    axiosInstance.interceptors.response.use(
      res => res,
      err => {
        if (err.response) {
          throw new Error(`${err.response.statusText}-${err.response.status}: ${err.response.data || ""}`);
        } else {
          throw new Error(err.message);
        }
      }
    );
    return axiosInstance;
  }

  protected axiosInstance: AxiosInstance;
}