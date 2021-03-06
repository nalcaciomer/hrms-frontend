import axios from "axios";

export default class CityService {
  getCities() {
    return axios.get("http://localhost:8080/api/cities/getall");
  }

  getCityById(id) {
    return axios.get(`http://localhost:8080/api/cities/getbyid?id=${id}`);
  }

  getCityByName(name) {
    return axios.get(`http://localhost:8080/api/cities/getbyname?name=${name}`);
  }

  getCitiesByAsc() {
    return axios.get("http://localhost:8080/api/cities/getallbynameasc");
  }

  getCitiesByDesc() {
    return axios.get("http://localhost:8080/api/cities/getallbynamedesc");
  }
}
