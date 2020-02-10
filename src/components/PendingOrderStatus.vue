<template>
  <div v-if="pendingOrders.length > 0">
    <div class="notification is-info is-light custom__pending-order-status">
      <!-- <button class="delete" :click="hideNotification()"></button> -->
      <span class="icon">
        <i class="fas fa-truck"></i>
      </span>
      <p>Uw bestelling van {{ recentOrder.restaurantName }} is onderweg!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PendingOrderStatus',
  data: () => {
    return {
      showNotification: true
    };
  },
  computed: {
    recentOrder() {
      return this.pendingOrders[0];
    },
    ...mapGetters(['pendingOrders'])
  }
  // methods: {
  //   hideNotification: () => (this.data.state.showNotification = false)
  // }
};
</script>
