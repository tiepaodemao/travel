<template>
  <div class="filter">
    <div class="filter-name">{{filterName}} :</div>
    <slot></slot>
  </div>
</template>

<script>
    export default {
      name: "FilterSearch",
      props:{
        filterName:{
          type: String,
          default: '城市筛选'
        }
      },
      // methods:{
      //   optionClick(option){
      //     this.$emit('optionClick',option)
      //   }
      // }
    }
</script>

<style lang="scss" scoped>
  .filter{
    /*height: 400px;*/
    border: 1px seagreen solid;
    height: 50px;
    input{
      width: 50px;
      height: 25px;
      margin: 12px 20px 0 0;
      color: #2d7848;
      border:1px solid #00a47d;
      padding-left: 20px;
      /*margin-right: ;*/

    }
    /*input:*/
    .filter-name{
      float: left;
      width: 90px;
      height: 100%;
      color: #e1f5eb;
      background-color: #00af7e;
      line-height: 50px;
      text-align: center;
      margin-right: 30px;
    }
    ul{
      list-style: none;
      margin: 10px 0;
      li{
        float: left;
        flex: 1;
        width: 100px;
        line-height: 30px;
        background-color: #86d6b6;
        margin-right: 20px;
        color: #00351a;
        border-radius: 8px 8px ;
        text-align: center;
      }
      li:hover{
        background-color: #6cc18f;
      }
    }
  }
</style>
