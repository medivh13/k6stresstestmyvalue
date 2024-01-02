import http from 'k6/http';
import { sleep } from 'k6';
// import { HOST_API, TOKEN, BUY_EVENT } from './data_const';

export default function testEndpointReferral() {
  const HOST_API = "https://api.ovaltech.id"
  const REFERRAL = "/v1/users/referral/check_code"
  const TOKEN = "Bearer aqxOfbFoLuJ4hE8NCUTIDwNLR5bNbPkciWCT-4Az-QQ.ls3PVpO_m0xQtfanEchlfCMEEMA22b6C-7qQflyqZ_U"

  const API_URL = HOST_API+REFERRAL
  const payload = {
    code: "lala1"
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
}

// k6 run --vus 400 --duration 60s src/endpoints/event_buy_test.js
