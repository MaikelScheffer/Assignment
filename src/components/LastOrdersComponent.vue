<template>
  <div class="custom__order-history">
    <div v-for="(item, key) in orders" :key="key" class="custom__order-history__item">
      <router-link :to="{ path: `orders/${key}` }">
        <OrderDetailCard :order="item"></OrderDetailCard>
      </router-link>
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
  },
  created() {
    console.log(this.orders);
  }
};
</script>
