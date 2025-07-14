import axios from "axios";
import { CATALOG_LIMIT } from "../const";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";
axios.defaults.headers = {
  "Content-Type": "application/json",
};

export const catalogFetch = async (options = {}) => {
  const params = {
    limit: CATALOG_LIMIT,
    page: 1,
    ...options,
  };

  const { data } = await axios.get("/campers", { params });
  return data;
};

export const fetchDetail = async (truckId) => {
  const { data } = await axios.get(`/campers/${truckId}`);
  return data;
};
