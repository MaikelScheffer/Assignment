<template>
  <router-link :to="{ name: `orders/${order.id}` }" class="nav-link" active-class="active">
    <div class="box custom__order-detail-card">
      <div class="custom__order-detail-card__icon">
        <i
          v-bind:class="[ order.status.toLowerCase() === 'in transit' ? 'fas fa-truck' : 'fas fa-check-circle' ]"
        ></i>
      </div>
      <div class="custom__order-detail-card__details">
        <strong>{{ order.restaurantName }}</strong>
        {{ $t('order-detail-card.delivered-at') }} {{ order.deliveryAddress }}
        <br />
        {{ $t('order-detail-card.delivered-on') }} {{ order.orderTime }}
      </div>

      <div class="custom__order-detail-card__price">{{ currency }} {{ order.orderTotal }}</div>
    </div>
  </router-link>
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
