//axiosInstance.js
import axios from "axios";

const API_KEY = 'YDBQCrbMETFmkVpqYgAfBUJ0SZGTv2ePc5Uq0Tkx6UU';

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export const fetchImages = async () => {
  const { data } = await instance.get("/photos");
  return data;
};

export const fetchImagesByQuery = async (query = "") => {
  const { data } = await instance.get(`/search/photos?query=${query}`);
  return data;
};
