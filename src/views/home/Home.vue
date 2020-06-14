<template>
  <div class="home">
    <home-swiper class="home-swiper" :banners="banners"/>
    <div class="container">
      <div class="container-title">
        <h2>湖南旅游网</h2>
        <p>为湖南旅游带盐</p>
      </div>
      <home-blocks class="blocks"/>
      <button class="more" @click="moreClick">
        查看更多
      </button>
    </div>
  </div>
</template>

<script>
    import HomeSwiper from '@/views/home/childComps/HomeSwiper'
    import HomeBlocks from '@/views/home/childComps/HomeBlocks'

    import homeLarger1 from '@/assets/images/homeLarger1.jpg'
    import homeLarger2 from '@/assets/images/homeLarger2.jpg'
    import homeLarger3 from '@/assets/images/homeLarger3.jpg'
    import homeLarger4 from '@/assets/images/homeLarger4.jpg'
    export default {
      name: "Home",
      components:{HomeBlocks, HomeSwiper},
      data(){
        return{
          banners:[
            {image: homeLarger1,describe:''},
            {image: homeLarger2,describe:''},
            {image: homeLarger3,describe:''},
            {image: homeLarger4,describe:''},
          ],
        }
      },
      methods:{
        moreClick(){
          this.$router.push('/search')
        }
      },
      created() {
        // console.log('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);
        // console.log(window.outerWidth+' '+ window.outerHeight);
        // console.log(window.navigator.appName)
        // console.log(window.navigator.platform);
        // console.log(window.screen.colorDepth);
        // console.log(window.location.pathname);
        // document.title='黄阳磊臭sb'
        // console.log(document.cookie);
      }
    }
</script>

<style lang="scss" scoped>
 .home{
   height: 1000px;
   .home-swiper{
     width: 100%;
     overflow:hidden;
   }
   .container{
     width: 85%;
     border:1px solid black ;
     margin:0 auto;
     z-index: 11;
     text-align: center;
     .container-title{
       margin: 20px 0;
       h2{
         line-height: 50px;
       }
       p{
         color: #bdc5c0;
         font-family: FangSong;
       }
     }
     .more{
       width: 100px;
       line-height: 40px;
       border: 1px solid black;
       border-radius: 10px;
       margin: 60px auto;
       transition: all 0.5s linear;
     }
     .more:hover{
       background-color: #78d77f;
     }

   }
 }
</style>
