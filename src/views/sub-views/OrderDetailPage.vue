<template>
  <div class="custom__order-detail-page">
    <div class="box">
      <div class="custom__order-detail-page__order">
        <div class="custom__order-detail-page__order__banner">
          <div
            class="custom__order-detail-page__order__banner__restaurant"
          >{{ order.orderTime | formatDate }} | {{ order.restaurantName }}</div>
          <div class="custom__order-detail-page__order__banner__end">
            <div class="custom__order-detail-page__order__banner__end__status">
              <i
                class="is-size-4"
                :title="[ order.status.currentStatus.toLowerCase() === 'in transit' ? 'Onderweg' : 'Afgeleverd' ]"
                :class="[ order.status.currentStatus.toLowerCase() === 'in transit' ? 'fas fa-truck' : 'fas fa-check-circle' ]"
              ></i>
            </div>
          </div>
        </div>

        <div class="custom__order-detail-page__order__information">
          <div>
            <span>{{ $t('order-detail-page.address') }}:</span>
            {{ order.deliveryAddress }}
          </div>
          <!-- // dd / dt? -->

          <div>
            <span>{{ $t('order-detail-page.reference') }}:</span>
            {{ order.orderReference }}
          </div>
          <div>
            <span>{{ $t('order-detail-page.date') }}:</span>
            {{ order.orderTime }}
          </div>

          <div>
            <span>{{ $t('order-detail-page.payment-method') }}:</span>
            {{ order.paymentMethod }}
          </div>
        </div>
        <!-- Make this a table -->
        <div class="custom__order-detail-page__order__rows">
          <div class="custom__order-detail-page__order__rows__banner">
            <span>{{ $t('order-detail-page.order') }}</span>
          </div>

          <table class="table is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th class="has-text-centered">{{ $t('order-detail-page.amount') }}</th>
                <th>{{ $t('order-detail-page.description') }}</th>
                <th class="has-text-right">{{ $t('order-detail-page.price') }}</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td class="has-text-centered">-</td>
                <td class="has-text-right">
                  <strong>{{ $t('order-detail-page.order-total') }}</strong>
                </td>
                <td class="has-text-right">{{ selectedLanguage.currency }} {{ order.orderTotal }}</td>
              </tr>
            </tfoot>

            <tbody>
              <tr v-for="(product, index) in order.products" :key="index">
                <td class="has-text-centered">{{ product.amount }}</td>
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
                <td
                  class="has-text-right"
                >{{ selectedLanguage.currency }} {{ product.pricePerUnitWithTax }}</td>
              </tr>
              <tr>
                <td class="has-text-centered">1</td>
                <td>{{ $t('order-detail-page.delivery-costs') }}</td>
                <td class="has-text-right">{{ selectedLanguage.currency }} {{ order.deliveryCosts }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Make this a table -->
        <div class="custom__order-detail-page__order__status">
          <div class="custom__order-detail-page__order__status__banner">
            <span>{{ $t('order-detail-page.state-history') }}</span>
          </div>

          <table class="table is-fullwidth is-hoverable is-striped">
            <thead>
              <tr>
                <th>{{ $t('order-detail-page.date') }}</th>
                <th>{{ $t('order-detail-page.state') }}</th>
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
import { FETCH_ORDER_DETAILS } from '@/store/actions';

export default {
  name: 'OrderDetails',
  beforeRouteEnter(to, from, next) {
    var orderId = from.params.orderId;

    Promise.all([store.dispatch(FETCH_ORDER_DETAILS, orderId)]).then(() => {
      next();
    });
  },
  filters: {
    formatDate: function(date) {
      return moment(date).format('LL');
    }
  },
  computed: {
    ...mapGetters(['order', 'selectedLanguage'])
  }
};
</script>
