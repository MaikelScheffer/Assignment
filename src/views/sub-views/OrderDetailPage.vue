<template>
  <div class="custom__order-detail-page">
    <div class="box">
      <div class="custom__order-detail-page__order">
        {{ order.deliveryAddress }}
        {{ order.deliveryCosts }}
        {{ order.orderReference }}
        {{ order.orderTime }}
        {{ order.orderTotal }}
        {{ order.paymentMethod }}
        {{ order.restaurantName }}
        <div class="custom__order-detail-page__order__rows__product">
          <div
            v-for="(product, index) in order.products"
            :key="index"
            class="custom__order-detail-page__order__rows__product"
          >
            {{ product.amount }}
            {{ product.pricePerUnitWithTax }}
            {{ product.productDescription }}
            {{ product.productName }}
          </div>
        </div>

        <div class="custom__order-detail-page__order__status">
          {{ order.status.currentStatus }}
          <div
            v-for="(update, index) in order.status.history"
            :key="index"
            class="custom__order-detail-page__order__status__history"
          >
            {{ update.statusStart }}
            {{ update.status }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex';
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
  },
  computed: {
    ...mapGetters(['order'])
  }
};
</script>
