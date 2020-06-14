<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper" v-for="(item,key) in banners" :key="key">
        <img :src="item.image" alt="芜湖~">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
    import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
      name: "MySwiper",
      components:{SwiperSlide,Swiper},
      props:{
        banners:{type:Array,default:[]}
      },
      data() {
        return {
          swiperOption: {
            spaceBetween: 0,
            centeredSlides: true,
            loop:true,
            autoplay: {
              delay: 2000,
              disableOnInteraction: false
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
        }
      }
    }
</script>

<style scoped>
  .swiper{
    padding: 0;
  }
  img{
    height: auto;
    width: 100%;
  }
</style>

