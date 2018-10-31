import Axios from "axios";

Axios.defaults.baseURL = "http://192.168.15.5:3000/api/v1";
Axios.defaults.headers.common["X-Application"] = "app";

function request(method, url, data = null, headers = null) {
  tmp = {};
  tmp.method = method;
  tmp.url = url;
  if (data) tmp.data = data;
  if (headers) tmp.headers = headers;

  return Axios(tmp);
}

export function login(email, password) {
  return request("POST", "/login", {
    user: {
      user_handler: email,
      password: password
    }
  }).then(res => {
    Axios.defaults.headers.common["Authorization"] = res.data.token;
    return res;
  });
}
export function logout() {
  return request("POST", `/logut`, {});
}
export function shopping_bag() {
  return request("GET", `/shopping_bags`);
}
export function remove_shopping_bag() {
  return request("DELETE", `/shopping_bags/${id}`);
}
export function add_shopping_bag(id) {
  return request("POST", `/shopping_bags/${id}`, {});
}
export function buy_shopping_bag() {
  return request("POST", `/shopping_bags/${id}`, {});
}
export function product(id) {
  return request("GET", `/products/${id}`);
}
