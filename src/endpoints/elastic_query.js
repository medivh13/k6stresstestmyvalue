import http from 'k6/http';
import { sleep } from 'k6';
// import { HOST_API, TOKEN, BUY_EVENT } from './data_const';

export default function testElasticSearch() {
  const HOST_API = "http://localhost:9200"
  const BUY_EVENT = "/hotel_search_2/_search"
  

  const API_URL = HOST_API+BUY_EVENT
  const payload = {
	"query": {
		"bool": {
			"filter": [
				{
					"range": {
						"inventory.date": {
							"gte": "2022-11-02",
							"lte": "2022-11-03"
						}
					}
				},
				{
					"term": {
						"inventory.hotel_id": 1
					}
				}
			]
		}
	}
};

  const headers = {
    'Content-Type': 'application/json',
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
