import axios from "axios";
import { convertCentsToEuros } from "../utils/convert_currency";
const baseUrl = process.env.VUE_APP_API_URL;
class ProductsService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getProducts() {
    try {
      const response = await axios.get(`${this.baseUrl}/products`);
      return response.data.products.map((product) => ({
        ...product,
        price: convertCentsToEuros(product.price),
      }));
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  async checkout() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return {
        success: true,
        message: "Checkout successful",
      };
    } catch (error) {
      console.error("Error checking out:", error);
    }
  }
}

const productsService = new ProductsService(baseUrl);
Object.freeze(productsService);

export default productsService;
