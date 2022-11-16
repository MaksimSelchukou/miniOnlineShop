import axios from "axios";
import { ProductType } from "../components/pages/home/Home";

type ResponceType = {
  products: Array<ProductType>;
  total: number;
  skip: number;
  limit: string;
};

axios.defaults.baseURL = "https://dummyjson.com/products";

export const productsAPI = {
  async getProducts() {
    const responce = await axios.get<ResponceType>("/");
    return responce.data;
  },
  async getSingleProduct(id: string) {
    const responce = await axios.get<ProductType>(`/${id}`);
    return responce.data;
  },
};
