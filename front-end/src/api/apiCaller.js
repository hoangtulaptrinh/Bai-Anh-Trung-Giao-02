import axios from 'axios'

export function request_infused_by_data(url, method, body) {
  return axios({
    method: method,
    url: url,
    data: body
  })
    .catch(error => {
      console.log(error)
    });
};

export function request_infused_by_params(url, method = 'GET', body) {
  return axios({
    method: method,
    url: url,
    params: body
  })
    .catch(error => {
      console.log(error)
    });
};