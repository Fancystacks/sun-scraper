import axios from 'axios';

export const register = newUser => {
  return axios
    .post('/users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered');
    })
}

export const login = user => {
  return axios
    .post('/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    });
}

export const pvWattsForm = newRequest => {
  return axios
  .post('/test/pvWatts', {
    street_address: newRequest.street_address,
    city: newRequest.city,
    home_state: newRequest.home_state,
    zip_code: newRequest.zip_code,
    system_capacity: newRequest.system_capacity
  })
  .then(response => {
    console.log('hit the backend for pvWatts')
  })
  .catch(err => {
    console.log(err)
  })
}