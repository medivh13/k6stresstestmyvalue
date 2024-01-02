import http from 'k6/http';
import { sleep } from 'k6';
// import { HOST_API, TOKEN, BUY_EVENT } from './data_const';

export default function testCheckUser() {
  const HOST_API = "https://auth.ovaltech.id"
  const USER_CHECk = "/v2/user/check"
  

  const API_URL = HOST_API+USER_CHECk
  const payload = {
    username: "jody@citis.kompasgramedia.com",
  };

  const headers = {
    'Content-Type': 'application/json',
    // Authorization: TOKEN,
  };

  const res = http.post(API_URL, JSON.stringify(payload), { headers });

  if (res.status === 408) {
    console.error(`Error: ${res.status}`);
  }

  // Tambahkan delay jika perlu (misalnya, untuk mendekati RPS yang diinginkan)
  sleep(0.0025);
}

// k6 run --vus 400 --duration 60s src/endpoints/event_buy_test.js
