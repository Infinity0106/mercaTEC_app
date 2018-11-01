import Axios from "axios";

Axios.defaults.baseURL = "http://10.15.87.251:3000/api/v1";
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
  return request("DELETE", `/logout`, {}).then(res => {
    delete Axios.defaults.headers.common["Authorization"];
    return res;
  });
}

export function shopping_bag() {
  return request("GET", `/shopping_bags`);
}

export function remove_shopping_bag(id) {
  return request("DELETE", `/shopping_bags/${id}`);
}

export function remove_item_shopping_bag(shopping_id, product_id) {
  return request(
    "DELETE",
    `/shopping_bags/${shopping_id}/products/${product_id}`
  );
}

export function add_shopping_bag(id) {
  return request("POST", `/shopping_bags/${id}`, { product_id: id });
}

export function product(id) {
  return request("GET", `/products/${id}`);
}
