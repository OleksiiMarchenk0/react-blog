const API_URL = "http://localhost:3001";

function request(endpoint, method = "GET", data = null) {
  const config = {
    method,
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer token",
    },
  };
  if(method === "POST" || method === "PATCH") {
    const newPostData = {
      text: data,
      id: Date.now(),
    };
    config.body = JSON.stringify(newPostData);
  }
  const url = `${API_URL}/${endpoint}`;
  return fetch(url, config).then((response) => {
    return response.json();
  });
}

function get(endpoint) {
  console.log("post");
  return request(endpoint);
}
function post(endpoint, data) {
  console.log("post");
  return request(endpoint, "POST", data);
}
function patch(endpoint, data) {
  return request(endpoint, "PATCH", data);
}
function _delete(endpoint) {
  return request(endpoint, "DELETE");
}

export default {
  get,
  post,
  patch,
  delete: _delete,
};
