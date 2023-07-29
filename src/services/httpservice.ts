import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "https://cleverfarm-homework.com/"

const defaultServiceCallFn = async (xhrFn: Function) => {
    let data: AxiosResponse | null = null, error: AxiosError | null = null, success: boolean = true;

    try {
        data = await xhrFn();
    } catch (httpError) {
        error = httpError as AxiosError;
        success = false;
    }

    return {data, error, success};
}

export default {
    get: async (url: string, config?: AxiosRequestConfig) => defaultServiceCallFn(() => axios.get(url, config)),
    post: async (url: string, payload: any, config?: AxiosRequestConfig) => defaultServiceCallFn(() => axios.post(url, payload, config)),
    patch: async (url: string, payload: any, config?: AxiosRequestConfig) => defaultServiceCallFn(() => axios.patch(url, payload, config)),
    put: async (url: string, payload: any, config?: AxiosRequestConfig) => defaultServiceCallFn(() => axios.put(url, payload, config)),
    delete: async (url: string, config?: AxiosRequestConfig) => defaultServiceCallFn(() => axios.delete(url, config))
}