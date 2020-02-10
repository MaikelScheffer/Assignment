<template>
  <div class="box"></div>
</template>

<script>
import { CustomerService } from '../services/customerService';

export default {
  name: 'CustomerInformation',
  mounted() {
    var test = CustomerService.getCustomerInformation('misc');
    console.log(test);
  }
};
</script>
