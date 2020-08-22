
<template>
  <div class="scroll">
      <slot></slot>
  </div>
</template>

<script>
import { mapState  } from 'vuex'
export default {
    data(){
        return{
            load: false,

        }
    },
      methods:{
        scroll(){
            let bottomScroll = document.documentElement.scrollTop > document.documentElement.offsetHeight - 1500
            if(bottomScroll && !this.load){ // проверка есть ли еще данные
                console.log("Загрузка данных");
                this.addData();
            }
        },
        async addData(){
            this.load = true;
            this.$store.commit("scroll/AddQuantityScroll");
            let data = await this.$store.dispatch("_AxiosPhotos", this.scrolling);
            this.load = data;
        }
    },
    computed:{
        scrolling(){
            return this.$store.getters["scroll/GetQuantityScroll"];
        }
    },
    mounted(){ // создание скролинга при отображение компонента
        window.addEventListener("scroll" , this.scroll)
        this.scroll()
    },
      beforeDestroy() {// удаление скролинга при удаление компонента
        window.removeEventListener('scroll', this.scroll);
    },  


    created(){
 
    },
}
</script>

<style>

</style>