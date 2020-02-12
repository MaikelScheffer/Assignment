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

        <div class="custom__order-detail-page__order__information">
          <div>
            <span>Address:</span>
            {{ order.deliveryAddress }}
          </div>
          <!-- // dd / dt? -->
          <div>
            <span>Delivery costs:</span>
            {{ order.deliveryCosts }}
          </div>

          <div>
            <span>Reference:</span>
            {{ order.orderReference }}
          </div>
          <div>
            <span>Date:</span>
            {{ order.orderTime }}
          </div>
          <div>
            <span>Order total:</span>
            {{ order.orderTotal }}
          </div>

          <div>
            <span>Payment method:</span>
            {{ order.paymentMethod }}
          </div>
        </div>
        <!-- Make this a table -->
        <div class="custom__order-detail-page__order__rows">
          <div class="custom__order-detail-page__order__rows__banner">
            <span>Bestelling</span>
          </div>

          <table class="table is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td>-</td>
                <td>
                  <strong>Order total</strong>
                </td>
                <td>{{ order.orderTotal }}</td>
              </tr>
            </tfoot>

            <tbody>
              <tr v-for="(product, index) in order.products" :key="index">
                <td>{{ product.amount }}</td>
                <td>
                  <div class="custom__order-detail-page__order__rows__product__information">
                    <div
                      class="custom__order-detail-page__order__rows__product__information__name"
                    >{{ product.productName }}</div>
                    <div
                      class="custom__order-detail-page__order__rows__product__information__description"
                    >{{ product.productDescription }}</div>
                  </div>
                </td>
                <td>{{ product.pricePerUnitWithTax }}</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Delivery costs</td>
                <td>{{ order.deliveryCosts }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Make this a table -->
        <div class="custom__order-detail-page__order__status">
          <div class="custom__order-detail-page__order__status__banner">
            <span>Status history</span>
          </div>

          <table class="table is-fullwidth is-hoverable is-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(update, index) in order.status.history" :key="index">
                <td>{{ update.statusStart }}</td>
                <td>{{ update.status }}</td>
              </tr>
            </tbody>
          </table>

          <!-- <div class="custom__order-detail-page__order__status__history">
            {{ update.statusStart }}
            {{ update.status }}
          </div>-->
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
