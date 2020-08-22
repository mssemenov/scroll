<template>
  <b-col :data-id="data.id"  cols="12" sm="6" lg="4" class="mb-5 d-flex flex-column justify-content-between">
      <h5 class="text-center">{{ data.title}}</h5>
      <b-img fluid  :src="data.url"></b-img>
  </b-col>
</template>

<script>
export default {
props: {
    data: {},
},
}
</script>

<style>

</style>