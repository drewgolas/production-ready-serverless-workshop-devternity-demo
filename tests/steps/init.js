let initialized = false;
const init = async () => {
    if (initialized) {
      return
    }
  
    process.env.restaurants_api   = "https://pu2cu9og8a.execute-api.us-east-1.amazonaws.com/dev/restaurants"
    process.env.restaurants_table = "restaurants-dev-drew"
    process.env.AWS_REGION        = "us-east-1"
    process.env.order_events_stream = "orders-dev-drew";
    process.env.restaurant_notification_topic = "restaurants-dev-drew";
    process.env.TEST_ROOT = "https://pu2cu9og8a.execute-api.us-east-1.amazonaws.com/dev";

    initialized = true
  }
  
  module.exports = {
    init
  }
