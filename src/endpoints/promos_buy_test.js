import http from 'k6/http';
import { sleep } from 'k6';
// import { HOST_API, TOKEN, BUY_EVENT } from './data_const';

export default function testEndpointPromoBuy() {
  const HOST_API = "https://api.ovaltech.id"
  const BUY_EVENT = "/v2/promos/buy"
  const TOKEN = "Bearer e6Wuyf7YtIZWVuB4vq8HxMjckcl8ZcvOlV2Hyqq7Ejo.dtamZqWnSKbrqTptoCHRZwhmSrKqGFGxNuOEm67OloU"

  const API_URL = HOST_API+BUY_EVENT
  const payload = {
    id: "12981"
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: TOKEN,
  };

  const res = http.post(API_URL, JSON.stringify(payload), { headers });

  if (res.status === 408) {
    console.error(`Error: ${res.status}`);
  }

  // Tambahkan delay jika perlu (misalnya, untuk mendekati RPS yang diinginkan)
  sleep(0.0025); 
  // 400 RPS 1:400
}

// k6 run --vus 400 --duration 60s src/endpoints/event_buy_test.js
