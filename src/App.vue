<template>
  <div id="app">
    <nav-bar class="nav-bar" @contentPadding="contentPadding" />
    <div :class="{content:isContent}">
      <router-view/>
    </div>
  </div>
</template>

<script>
    import NavBar from '@/components/common/navbar/NavBar'
    export default {
      name: 'App',
      components:{NavBar},
      data(){
        return{
          isContent :false,
        }
      },
      methods:{
        contentPadding(item){
          this.isContent=item
        }
      },
      mounted() {
        // window.addEventListener('scroll',this.handleScroll,true);
      }

}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .nav-bar{
    font-size: 40px;
    width: 100%;
    position: fixed;
    z-index: 10;
   /*background-color: #2c9874;*/
  }
  .content{
    padding-top: 50px;
  }
</style>
