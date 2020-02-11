<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="customer.picture.medium" alt="Image" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <div>
            <strong>{{ customer.firstName }} {{ customer.lastName }}</strong>
          </div>
          <small>
            <a :href="customer.emailAddress">{{ customer.emailAddress }}</a>
          </small>
          <div>{{ customer.address }}</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'CustomerInformation',
  props: {
    customer: { type: Object, required: true }
  }
};
</script>
