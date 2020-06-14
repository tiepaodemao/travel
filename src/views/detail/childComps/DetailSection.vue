<template>
  <div class="section" v-if="Object.keys(section).length !==0 ">
    <div class="section-phone" v-if="section.titleName==='景区电话'">
      <h2>{{section.titleName}}</h2>
      <p>{{message.phone}}</p>
    </div>
    <div class="section-site" v-else-if="section.titleName==='景点地址'">
      <h2>{{section.titleName}}</h2>
      <p><a href="">{{message.site}}</a></p>
      <p v-if="Object.keys(messageArray).length!==0" v-for="item in messageArray">{{item}}</p>
    </div>
    <div class="open-time" v-else-if="section.titleName==='开放时间'">
      <h2>{{section.titleName}}</h2>
      <p>{{message.openTime}}</p>
    </div>
    <div class="section-policy" v-else-if="section.titleName==='优待政策'">
      <h2>{{section.titleName}}</h2>
      <p v-for="item in messageArray">{{item}}</p>
    </div>
    <div class="section-images" v-else-if="section.titleName==='景区图片'">
      <img :src="item" v-for="item in message.images"/>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DetailSection",
      data(){
        return{
          message:this.section.message,
          messageArray:[],
          titleName:['景区电话','景点地址','开放时间','优待政策','景区图片']
        }
      },
      props:{
        section:{
          type:Object,
          default:{}
        }
      },
      created() {
        if(this.section.message.policy){
          this.messageArray=this.section.message.policy.split('*');
        }else if (this.section.message.route){
          this.messageArray=this.section.message.route.split('↵');
          // this.messageArray=console.log(this.section.message.route.replace(/\n/g, "<br/>"));
        }
      }
    }
</script>

<style lang="scss" scoped>
  .section{
    margin: 0 20px;
    div{
      padding: 5px 0 0 5px;
      border: 1px seagreen solid;
    }
    p{
      line-height: 35px;
    }
    .section-site{
      p{
        margin: 20px 0;
      }
      a{
        color: #00a47d;
      }
    }
    .section-policy{
      p{
        font-family: FangSong;
      }
    }
    .section-images{
      text-align: center;
      img{
        margin: 20px 0;
      }
    }
  }
</style>
