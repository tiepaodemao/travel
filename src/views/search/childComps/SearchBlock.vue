<template>
  <div class="search-block">
    <div class="block-top">
      <div class="shade">
        <h2>{{block.scenerySpot}}</h2>
        <p>{{block.shortDescription}}</p>
      </div>
      <div class="block-image">
        <img :src="block.image"/>
      </div>
    </div>
    <div class="message">
      <div>{{block.scenerySpot}}</div>
      <div><span>￥ {{block.price}}</span></div>
    </div>
  </div>
</template>

<script>
    import mzdgj from '@/assets/images/毛泽东故居.jpg'
    export default {
      name: "SearchBlock",
      props:{
        block:{
          type:Object,
          default:() => {
            return {
              image:mzdgj,
              scenerySpot:'毛泽东故居',
              price:113,
              shortDescription:'毛泽东故居位于韶山冲，距长沙市104公里,又名上屋场，坐落在茂林修竹、青翠欲滴的山冲中。'
            }
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  .search-block{
    width: 100%;
    height: 100%;
    border:1px solid #00a47d;
    border-radius: 5px 5px;
    overflow: hidden;
    transition: all 0.25s ease-in;
    &:hover{
      /*position: relative;*/
      transform:translateY(-10px);
    }
    &:hover .block-top .shade{
      display: block;
    }
    .block-top{
      width: 100%;
      height: calc(100% - 30px - 2px);
      position: relative;
      .shade{
        position: absolute;
        z-index: 10;
        width: calc(100%);
        height: calc(100%);
        background-color: rgba(22, 33, 25, 0.6);
        text-align: center;
        display: none;
        h2{
          margin: 10px;
          font-weight:normal;
          font-size: 23px;
          color: #008a65;
        }
        p{
          line-height: 30px;
          margin: 0 20px;
          color: #158f3f;
          font-size: 17px;
        }
      }
      .block-image{
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .message{
      display: flex;
      font-family: FangSong;
      div{
        flex: 1;
        line-height: 30px;
        text-align: center;
        font-size: 20px;
        span{
          color: red;
        }
      }
    }

  }
</style>
