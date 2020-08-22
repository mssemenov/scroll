<template>
  <scroll>
    <b-container>
      <b-row class="mt-4">
          <photos v-for="data in photos" :key="data.id" :data="data">
          </photos>
      </b-row>
    </b-container>
  </scroll>
</template>

<script>
import scroll from "../components/scroll"
import protos from "../components/photos"
import { mapState  } from 'vuex'
export default {
  async fetch({store}){
    await store.dispatch("_AxiosPhotos", 1);
  },
  computed:{
    ... mapState([
      "photos"
    ])
  },
  components: {
    protos,
    scroll,
  },
}
</script>

<style>

</style>