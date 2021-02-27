import http from "../http-common";

class ItemDataService {
  getAll() {
    return http.get("/item");
  }

  get(id) {
    return http.get(`/item/${id}`);
  }

  create(data) {
    return http.post("/item", data);
  }

  update(id, data) {
    return http.put(`/item/${id}`, data);
  }

  delete(id) {
    return http.delete(`/item/${id}`);
  }

  deleteAll() {
    return http.delete(`/item`);
  }

  findByItemName(itemName) {
    return http.get(`/item?itemName=${itemName}`);
  }
}

export default new ItemDataService();