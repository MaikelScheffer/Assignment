<template>
  <div v-if="pendingOrders.length> 0" class="box">
    <i class="fas fa-truck"></i>
    Amount of pending orders {{ pendingOrders.length }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PendingOrderStatus',
  computed: {
    ...mapGetters(['pendingOrders'])
  }
};
</script>
