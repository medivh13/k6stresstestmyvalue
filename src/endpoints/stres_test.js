import testEndpointEventBuy from './event_buy_test.js';
import testEndpointEventGet from './event_get_test.js';
import testEndpointEventDetail from './event_detail_test.js';
import testEndpointEventGuestBuy from './event_guest_buy_test.js'
import testEndpointEventTicketGet from './event_ticket_test.js';
import testEndpointEventTicketDetail from './event_ticket_detail_test.js';
import testCheckUser from './user_check_test.js'
import testEndpointEventCampaignGet from './event_campaign.js';
import testEndpointEventCampaignDetail from './event_campaign_detail.js'
import testEndpointPoin from './point_test.js';
import testEndpointPoinExpired from './point_expired_test.js';
import testEndpointPromo from './promo_new_test.js';
import testEndpointPromoBuy from './promos_buy_test.js';
import testEndpointReferral from './referral_check_code_test.js';
import testEndpointGiftVoucher from './gift_voucher_test.js'
import testElasticSearch from './elastic_query.js'


export default function () {
  // testEndpointEventBuy();
  // testEndpointEventGet();
  // testEndpointEventDetail();
  // testEndpointEventGuestBuy ();
  // testEndpointEventTicketGet ();
  // testEndpointEventTicketDetail ();
  // testCheckUser();
  
  // testEndpointEventCampaignGet();
  // testEndpointEventCampaignDetail();
  // testEndpointPoin();
  // testEndpointPoinExpired();
  // testEndpointPromo();
  // testEndpointPromoBuy();
  // testEndpointReferral();
  // testEndpointGiftVoucher();
  testElasticSearch();
}

// k6 run --vus 1000 --rps 400  --duration 60s src/endpoints/stres_test.js