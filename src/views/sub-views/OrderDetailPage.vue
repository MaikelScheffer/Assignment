<template>
  <div class="custom__order-detail-page">
    <LastOrdersComponent :orders="orderHistory" />
  </div>
</template>

<script>
import store from '@/store';
// import { mapGetters } from 'vuex';
import { FETCH_ORDER_DETAILS, SET_ORDER_DETAILS } from '@/store/actions';

export default {
  name: 'OrderDetails',
  beforeRouteEnter(to, from, next) {
    var orderId = from.params.orderId;

    Promise.all([
      store.dispatch(FETCH_ORDER_DETAILS, orderId),
      store.dispatch(SET_ORDER_DETAILS, orderId)
    ]).then(() => {
      next();
    });
  }
};
</script>
