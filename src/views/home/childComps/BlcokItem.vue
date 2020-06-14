<template>
  <div class="blcok">
    <div class="item-image">
      <img :src="block.image"/>
    </div>
    <div class="item-city">
      {{block.scenerySpot}}
    </div>
    <div class="conceal"></div>
  </div>
</template>

<script>
    export default {
        name: "BlcoksItem",
      props:{
        block:{
          type:Object,
          default:null
        }
      }
    }
</script>

<style lang="scss" scoped>
  .blcok{
    .item-image {
      width: 100%;
      height: calc(100% - 3px - 40px);
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        background-color: #a6dda7;
        transition: all 0.7s ease-in;
        &:hover{
          transform: scale(1.1);
        }
      }
    }
    .item-city{
      color: black;
      z-index: 12;
      background-color: #e6fcee;
      height: 40px;
      line-height: 40px;
      text-align: left;
      font-size: 20px;
      font-family: FangSong;
    }
    .conceal{
      width: 1px;
      background-color: #29ff75;
      height: 3px;
      /*margin: 0 auto;*/
      transition: all 0.7s ease-in;
      &:hover{

      }
    }
  }

  .blcok:hover .conceal{
    /*transform:scaleX(350);*/
    width: 300px;
    background-color: #00af1e;
    /*animation:myfirst 3s;*/
    /*animation-direction:alternate;*/
  }
  @keyframes myfirst{
    0%{
      height: 3px;
      width: 1px;
      background-color: #00af1e;
    }
    100%{
      width: 600px;
    }
  }

</style>
