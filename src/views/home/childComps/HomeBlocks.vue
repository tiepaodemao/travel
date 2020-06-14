<template>
  <div class="Blocks">
    <blcok-item class="BlocksItem" v-for="(item,key) in blocks" :key="key" :block="item" @mouseenter.native="itemMouseenter()"/>
  </div>
</template>

<script>
    import zjj from '@/assets/images/张家界.jpg'
    import jjzt from '@/assets/images/橘子洲头.jpg'
    import mzdgj from '@/assets/images/毛泽东故居.jpg'

    import BlcokItem from '@/views/home/childComps/BlcokItem'
    export default {
      name: "HomeBlocks",
      components:{BlcokItem},
      props:{
        blocks:{
          type:Array,
          default:() => {
            return [
              {image:mzdgj,shortDescription:'毛泽东故居位于韶山冲，距长沙市104公里,又名上屋场，坐落在茂林修竹、青翠欲滴的山冲中。',scenerySpot:'毛泽东故居'},
              {image:zjj,shortDescription:'玻璃栈道的刺激震撼，可与举世闻名的美国大峡谷玻璃走廊“天空之路”媲美，因而有了东方“天空之路”的美誉。',scenerySpot:'玻璃栈道'},
              {image:jjzt,shortDescription:'独立寒秋，湘江北去，橘子洲头。\n' +
                  '看万山红遍，层林尽染；漫江碧透，百舸争流。\n' +
                  '鹰击长空，鱼翔浅底，万类霜天竞自由。',scenerySpot:'橘子洲头'},
            ]
          }
        }
      },
      methods:{
        itemMouseenter(){
          // console.log('666');
        }
      }
    }
</script>

<style lang="scss" scoped>
  .Blocks{
    display: flex;
    justify-content: space-around;
    .BlocksItem{
      width: 300px;
      height: 230px;
      margin: 0 auto;
    }
  }

</style>
