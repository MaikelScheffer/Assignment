<template>
  <div class="custom__order-overview">
    <div class="columns">
      <div class="column">
        <PendingOrderStatus />
      </div>
    </div>
    <div class="columns">
      <div class="column is-three-quarters">
        <LastOrdersComponent />
      </div>
      <div class="column">
        <CustomerInformation />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomerInformation from '@/components/CustomerInformation.vue';
import LastOrdersComponent from '@/components/LastOrdersComponent.vue';
import PendingOrderStatus from '@/components/PendingOrderStatus.vue';

import store from '@/store';

import {
  FETCH_CUSTOMER_INFORMATION,
  FETCH_RECENT_ORDER_HISTORY
} from '../store/actions';

export default {
  name: 'OrderOverview',
  components: {
    CustomerInformation,
    LastOrdersComponent,
    PendingOrderStatus
  },
  beforeRouteEnter(to, from, next) {
    var randomUserId = '1231231';

    Promise.all([
      store.dispatch(FETCH_CUSTOMER_INFORMATION, randomUserId),
      store.dispatch(FETCH_RECENT_ORDER_HISTORY, randomUserId)
    ]).then(() => {
      next();
    });
  }
};
</script>
