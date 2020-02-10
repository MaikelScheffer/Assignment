<template>
  <div class="box">
    {{ order.deliveryAddress }}
    {{ order.orderTime }}
    {{ order.orderTotal }}
    {{ order.restaurantName }}
    {{ order.status }}
  </div>
</template>

<script>
export default {
  name: 'OrderDetailCard',
  props: ['order']
};
</script>
