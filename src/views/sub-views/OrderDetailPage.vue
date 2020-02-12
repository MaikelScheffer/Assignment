<template>
  <div class="custom__order-detail-page">
    <div class="box">
      <div class="custom__order-detail-page__order">
        <div class="custom__order-detail-page__order__banner">
          <div
            class="custom__order-detail-page__order__banner__restaurant"
          >{{ order.orderTime | formatDate }} | {{ order.restaurantName }}</div>
          <div class="custom__order-detail-page__order__banner__end">
            <div
              class="custom__order-detail-page__order__banner__end__status"
            >{{ order.status.currentStatus }}</div>
          </div>
        </div>

        <div class="custom__order-detail-page__order__information"></div>
        <div>
          <span>Address:</span>
          {{ order.deliveryAddress }}
        </div>
        <!-- // dd / dt? -->
        <div>{{ order.deliveryCosts }}</div>

        <div>{{ order.orderReference }}</div>
        <div>{{ order.orderTime }}</div>
        <div>{{ order.orderTotal }}</div>

        <div>{{ order.paymentMethod }}</div>

        <!-- Make this a table -->
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

        <!-- Make this a table -->
        <div class="custom__order-detail-page__order__status">
          <span>
            <strong>Status history</strong>
          </span>
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
import moment from 'moment';
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
  filters: {
    formatDate: function(date) {
      return moment(date).format('LL');
    }
  },
  computed: {
    ...mapGetters(['order'])
  }
};
</script>
