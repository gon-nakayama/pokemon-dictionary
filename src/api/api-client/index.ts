import axios from "axios";

// 共通Host
const baseURL = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;

// 共通のHTTPヘッダ
const headers = {
  "Content-Type": "application/json",
};

/**
 * how to use -> 'await ApiClient.post(`/posts`, params);'
 */
export const ApiClient = axios.create({ baseURL, headers });

// 共通のエラーハンドリング
ApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error?.response?.status);
    switch (error?.response?.status) {
      case 401:
        console.log("internal server error.");
        break;
      case 403:
        console.log("internal server error.");
        break;
      case 404:
        console.log("internal server error.");
        break;
      default:
        console.log("internal server error.");
    }

    const errorMsg = (error.response?.data?.message || "").split(",");
    throw new Error(errorMsg);
  }
);
