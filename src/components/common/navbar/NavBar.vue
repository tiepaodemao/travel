<template>
  <div v-if="isLogin" class="nav-bar"  :class="{isbgColor: narBarColor}">
    <div class="logo">
      <img src="~@/assets/images/logo.png"/>
    </div>
    <ul>
      <li class="nav-item" v-for="(item,key) in navItem" :key="key" @click="navClick(item)" @mouseleave="itemMouseleave(key,$event)">
        <span @mouseenter="itemMouseenter($event)" >
          {{item.title}}<span v-if="Object.keys(item.childDirectory).length !==0"> ∨</span>
        </span>
        <div ref="itemChild" class="item-child" v-if="Object.keys(item.childDirectory).length !==0">
          <div v-for="child in item.childDirectory">
            <a>{{child.title}}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "NavBar",
      data(){
        return{
          navItem:[
            {title:'网站首页',childDirectory:[]},
            {title:'关于我们',childDirectory:[]},
            {title:'热门城市',childDirectory:[{title:'长沙',routeAddress:''},{title:'张家界',routeAddress:''},{title:'湘潭',routeAddress:''}]},
            {title:'已购门票',childDirectory:[]},
            {title:'联系我们',childDirectory:[]},
            {title:'登录',childDirectory:[]}
          ],
          itemChildShow:false,
          narBarColor:false,
          isLogin: true
        }
      },
      watch:{
        $route(to, from){
          if(to.path === '/home'){
            this.isLogin = true
            window.addEventListener('scroll',this.handleScroll,true);
            this.narBarColor = false
          }else if(to.path === '/login'){
            this.isLogin = false
          }else {
            // console.log(this.isLogin);
            this.isLogin = true
            this.narBarColor = true
            this.$emit('contentPadding',this.narBarColor)
          }
        }
      },
      methods:{
        handleScroll(){
          let scrollTop= document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          if (scrollTop != null) {
            if (scrollTop>50)
              this.narBarColor=true
            else
              this.narBarColor=false
          }
        },
        itemMouseenter(e){
          // console.log('我进来啦');
          if (e.currentTarget.nextElementSibling !==null)
            e.currentTarget.nextElementSibling.style.display='block'
        },
        itemMouseleave(key,e){
          // console.log(key);
          this.$refs.itemChild[0].style.display = 'none'
          // this.$refs.itemChild.style.color='yellow'
          // e.currentTarget.nextElementSibling.style.display='none'
        },
        navClick(item){
          if (item.title === '网站首页') {
            this.$router.push('/home')
          }else if (item.title === '关于我们'){
            this.$router.push('/about')
          }else if(item.title === '联系我们'){
            this.$router.push('/contact')
          }else if(item.title === '登录'){
            this.$router.push('/login')
          }
        }

      },

    }
</script>

<style lang="scss" scoped>
  .isbgColor{
    background-color: white;
    color: #02d0ff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  }
  .nav-bar {
    display:flex;
    line-height: 50px;
    height: 50px;
    color: #008134;
    font-size: 13px;
    /*box-shadow: 0 1px 1px rgba(100,100,100,0.6);*/
    .logo{
      flex: 2;
      img{
        width: auto;
        height: 70px;
        position: relative;
        top:-10px;
        left: 50px;
      }
    }
    ul{
      flex: 3;
      display: flex;
      margin-right: 50px;
      /*list-style: none;*/
      .nav-item{
        flex: 1;
        /*margin: 0 20px;*/
        text-align: center;
        span:hover{
          color: #00ff42;
        }
        .item-child{
          /*text-align: center;*/
          position: relative;
          top: -10px;
          background-color: #f7fffa;
          width: 60px;
          margin: 0 auto;
          line-height: 30px;
          border-radius: 10px;
          display: none;
          a:hover{
            color: #00ff42;
          }
        }
      }
    }
  }
  ul{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
</style>
