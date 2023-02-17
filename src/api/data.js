import axios from "axios";
const BASE_URL = "http://localhost:3300/";

export class itemsApi {
  static async createApi(product) {
    return (await axios.post(`${BASE_URL}basket`, product)).data;
  }

  static async fetchAllApi() {
    return (await axios.get(`${BASE_URL}items`)).data;
  }

  static async removeApi(product) {
    return (await axios.delete(`${BASE_URL}basket/${product.id}`, product)).data;
  }

  static async updateApi(itemValues, itemId) {
    return (await axios.patch(`${BASE_URL}/${itemId}`, itemValues)).data;
  }

  static async FetchID(itemID) {
    return (await axios.get(`${BASE_URL}/${itemID}`)).data;
  }
}
