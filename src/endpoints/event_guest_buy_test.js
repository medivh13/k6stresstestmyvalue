import http from 'k6/http';
import { sleep } from 'k6';
// import { HOST_API, TOKEN, BUY_EVENT } from './data_const';

export default function testEndpointEventGuestBuy() {
  const HOST_API = "https://api.ovaltech.id"
  const BUY_EVENT = "/v1/events/guest-buy"
//   const TOKEN = "Bearer aqxOfbFoLuJ4hE8NCUTIDwNLR5bNbPkciWCT-4Az-QQ.ls3PVpO_m0xQtfanEchlfCMEEMA22b6C-7qQflyqZ_U"

  const API_URL = HOST_API+BUY_EVENT
  const payload = {
    eventId: 5475,
    pgMappingId: 1,
    name: "ella",
    phoneNumber: "6287824986591",
    email: "lala_test@oval.id",
    registrationData: [
        {
            "name": "ella",
            "email": "lala_test@oval.id",
            "phoneNumber": "6287824986591",
            "additionalData": {}
        }
    ]
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
