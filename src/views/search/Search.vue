<template>
  <div class="search">
    <div>
      <span></span>
      <filter-search class="search-filter" :filterName="cityFilters.filterName">
        <ul>
          <li v-for="option in cityFilters.options" :class="{optionColor:option===isCity}" @click="optionClick(option)">
            {{option}}
          </li>
        </ul>

      </filter-search>
      <filter-search :filterName="priceFilters.filterName">
        最小值：<input type="text" v-model="priceFilters.bottomPrice"/>
        最大值：<input type="text" v-model="priceFilters.peakPrice"/>
      </filter-search>
    </div>
    <div class="blocks">
      <div class="block">22</div>
      <div class="block">22</div>
      <div class="block">22</div>
      <div class="block">22</div>
      <div class="block">22</div>
      <div class="block">22</div>
      <div class="block">22</div>
<!--      <search-block class="block"  v-for="(item,key) in 3" :key="key"/>-->
    </div>
  </div>
</template>

<script>
    import FilterSearch from '@/views/search/childComps/FilterSearch'
    import SearchBlock from '@/views/search/childComps/SearchBlock'
    export default {
      name: "Search",
      components:{FilterSearch,SearchBlock},
      data(){
        return{
          cityFilters: {filterName:'城市筛选',options:['邵阳','长沙','张家界']},
          isCity:'',
          isOptionColor:false,
          priceFilters:{filterName:'价格筛选',bottomPrice:0,peakPrice:0}
        }
      },
      methods:{
        optionClick(option){
          this.isCity=option
        }
      }
    }
</script>

<style lang="scss" scoped>
  .search{
    margin: 0 auto;
    padding: 50px;
    width: 1000px;
    flex-direction: column;
    /*height: 300px;*/
    /*background-color: #00a47d;*/
    .search-filter{
      margin: 10px 0;
      .optionColor{
        background-color: #00b725;
      }
    }
    .blocks{
      margin-top: 20px;
      display: flex;
      flex-wrap:wrap-reverse;
      justify-content: space-around;
      width: 1000px;
      .block{
        width: 1000px;
        flex: 1;
        /*margin: 0 20px;*/
        /*width: 25%;*/
        height: auto;
      }
    }
  }
</style>
