<template>
  <div class="custom__order-overview">
    <div class="columns">
      <div class="column is-three-quarters">
        <router-view></router-view>
      </div>
      <div class="column">
        <CustomerInformation :customer="customer" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomerInformation from '@/components/CustomerInformation.vue';
// import LastOrdersComponent from '@/components/LastOrdersComponent.vue';
import { mapGetters } from 'vuex';

import store from '@/store';

import {
  FETCH_CUSTOMER_INFORMATION,
  FETCH_RECENT_ORDER_HISTORY
} from '../store/actions';

export default {
  name: 'CustomerProfilePage',
  components: {
    CustomerInformation
  },
  beforeRouteEnter(to, from, next) {
    var randomUserId = 'there-are-no-real-user-ids';

    Promise.all([
      store.dispatch(FETCH_CUSTOMER_INFORMATION, randomUserId),
      store.dispatch(FETCH_RECENT_ORDER_HISTORY, randomUserId)
    ]).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(['orderHistory', 'customer'])
  }
};
</script>
