<template>
  <div v-if="pendingOrders.length > 0">
    <router-link :to="{ path: `orders/${key}` }">
      <div class="notification is-info is-light custom__pending-order-status">
        <span class="icon">
          <i class="fas fa-shipping-fast"></i>
        </span>

        <p>{{ $t('pending-order-status.in-progress-message', { restaurantName: recentOrder.restaurantName }) }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PendingOrderStatus',
  computed: {
    recentOrder() {
      return this.pendingOrders[0];
    },
    ...mapGetters(['pendingOrders'])
  }
};
</script>
