<template>
  <div class="custom__order-history">
    <div v-for="order in orders" :key="order.key" class="custom__order-history__item">
      <OrderDetailCard :order="order"></OrderDetailCard>
    </div>
  </div>
</template>

<script>
import OrderDetailCard from './OrderDetailCard';

export default {
  name: 'LastOrderComponent',
  components: { OrderDetailCard },
  props: {
    orders: { type: Object, required: true }
  }
};
</script>
