<template>
  <div class="home">
    <i class="fas fa-home"></i>
    <CustomerInformation />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomerInformation from '@/components/CustomerInformation.vue';

export default {
  name: 'OrderOverview',
  components: {
    CustomerInformation
  }
};
</script>
