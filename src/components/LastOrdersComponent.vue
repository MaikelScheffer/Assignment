<template>
  <div class="custom__order-history">
    <div v-for="order in orders" v-bind:key="order.id" class="custom__order-history__item">
      <OrderDetailCard order></OrderDetailCard>
    </div>
  </div>
</template>

<script>
import OrderDetailCard from './OrderDetailCard';

export default {
  name: 'LastOrderComponent',
  components: { OrderDetailCard },
  props: {
    orders: []
  }
};
</script>
