<template>
  <div class="box custom__order-detail-card">
    <div class="custom__order-detail-card__icon">
      <i
        v-bind:class="[ order.status.toLowerCase() === 'in transit' ? 'fas fa-truck' : 'fas fa-check-circle' ]"
      ></i>
    </div>
    <div class="custom__order-detail-card__details">
      <strong>{{ order.restaurantName }}</strong>
      {{ $t('orderDetail__DeliveredAt') }} {{ order.deliveryAddress }}
      <br />
      {{ $t('orderDetail__DeliveredOn') }} {{ order.orderTime }}
    </div>

    <div class="custom__order-detail-card__price">{{ currency }} {{ order.orderTotal }}</div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetailCard',
  props: {
    order: { type: Object, required: true },
    currency: { type: String, required: false, default: '€' }
  }
};
</script>
