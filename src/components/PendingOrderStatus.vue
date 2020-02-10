<template>
  <div v-if="pendingOrders.length > 0">
    <div class="notification is-info is-light custom__pending-order-status">
      <span class="icon">
        <i class="fas fa-shipping-fast"></i>
      </span>
      <p>De bestelling van {{ recentOrder.restaurantName }} is onderweg</p>
    </div>
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
