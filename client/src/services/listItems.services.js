import http from "../http-common";

class ListItemDataService {
  getAll() {
    return http.get("/listItems");
  }

  get(id) {
    return http.get(`/listItems/${id}`);
  }

  create(data) {
    return http.post("/listItems", data);
  }

  update(id, data) {
    return http.put(`/listItems/${id}`, data);
  }

  delete(id) {
    return http.delete(`/listItems/${id}`);
  }

  deleteAll() {
    return http.delete(`/listItems`);
  }

  findByTitle(title) {
    return http.get(`/listItems?title=${title}`);
  }
}

export default new ListItemDataService();