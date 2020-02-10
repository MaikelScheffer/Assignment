<template>
  <div class="custom__order-overview">
    <div class="columns">
      <div class="column">
        <PendingOrderStatus />
      </div>
    </div>
    <div class="columns">
      <div class="column is-three-quarters">
        <LastOrdersComponent />
      </div>
      <div class="column">
        <CustomerInformation />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomerInformation from '@/components/CustomerInformation.vue';
import LastOrdersComponent from '@/components/LastOrdersComponent.vue';
import PendingOrderStatus from '@/components/PendingOrderStatus.vue';

export default {
  name: 'OrderOverview',
  components: {
    CustomerInformation,
    LastOrdersComponent,
    PendingOrderStatus
  }
};
</script>
