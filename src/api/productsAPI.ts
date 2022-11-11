import axios from "axios";
import { ProductType } from "../components/pages/home/Home";

type ResponceType = {
  products: Array<ProductType>;
  total: number;
  skip: number;
  limit: string;
};

export const productsAPI = {
  async getProducts() {
    const responce = await axios.get<ResponceType>(
      "https://dummyjson.com/products"
    );
    return responce.data;
  },
};
