import axios from "axios";
const BASE_URL = "http://localhost:3300/";

export  class itemsApi {
  static async createApi(product) {
    product={"bas":product}
    return (await axios.post(`${BASE_URL}basket`, product)).data;
  }

  static async bagData() {
    return ((await axios.get(`${BASE_URL}basket`)).data).bas
  }


  static async fetchAllApi() {
    return (await axios.get(`${BASE_URL}items`)).data;
  }

  static async removeApi(product) {
    return (await axios.delete(`${BASE_URL}basket/${product.id}`, product)).data;
  }

  static async updateApi() {
    return (await axios.get(`${BASE_URL}basket`)).data;
  }

  static async FetchID(itemID) {
    return (await axios.get(`${BASE_URL}/${itemID}`)).data;
  }
}
