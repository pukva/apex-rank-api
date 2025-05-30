const axios = require('axios');

const apiKey = process.env.TRN_API_KEY;  // считываем ключ из env переменной

axios.get('https://public-api.tracker.gg/apex/v1/standard/profile/pc/pukva', {
  headers: {
    'TRN-Api-Key': apiKey
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Request failed with status code', error.response.status);
});
console.log('API ключ из окружения:', apiKey);
