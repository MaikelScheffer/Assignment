<template>
  <div v-if="restaurantName !== '' || orderId !== ''">
    <router-link :to="{ path: `orders/${orderId}` }">
      <div class="notification is-info is-light custom__pending-order-status">
        <span class="icon">
          <i class="fas fa-shipping-fast"></i>
        </span>

        <p>{{ $t('pending-order-status.in-progress-message', { restaurantName: restaurantName }) }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PendingOrderStatus',
  props: {
    restaurantName: { type: String, required: false, default: '' },
    orderId: { type: String, required: false, default: '' }
  }
};
</script>
