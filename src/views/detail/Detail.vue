<template>
  <div class="bg" id="bg">
    <div class="detail">
      <div class="product-intro">
        <detail-swiper class="detail-swiper" :banners="banners"/>
        <div class="recommend">
          <div class="summary">
            <div class="sell-count">月销：<span>{{conciseSellCount}}</span></div>
            <h2>{{recommend.sight}}</h2>
            <h3>所在城市 <span>{{recommend.city}}</span></h3>
            <h3>预计价格 <span>{{recommend.price}}</span></h3>
            <div class="describe">
              {{recommend.describe}}
            </div>
          </div>
          <div class="product-intro-buy">
            <div class="buy">
              购买门票
            </div>
            <date-picker class="detail-date"  @dateSelection="dateSelection"/>
            <div class="ticket-Count">
              <button @click="ticketCount--">-</button>
              <span>{{ticketCount}}</span>
              <button @click="ticketCount++">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-sections">
        <div class="sections-nav fake" ref="fakeNav">
          <div class="nav-item" v-for="item in sections" :class="{isNavItem:(item.titleName ===isNavItem)}" @click="navItem(item.titleName)"  >{{item.titleName}}</div>
        </div>
        <div class="sections-nav" ref="nav">
          <div class="nav-item" v-for="item in sections" :class="{isNavItem:(item.titleName ===isNavItem)}" @click="navItem(item.titleName)"  >{{item.titleName}}</div>
        </div>
        <detail-section class="section" ref="section" v-for="(item,key) in sections" :key="key" :section="item"/>
      </div>
    </div>
  </div>
</template>

<script>
    import DetailSwiper from '@/views/detail/childComps/DetailSwiper'
    import DatePicker from '@/views/detail/childComps/DatePicker'
    import DetailSection from '@/views/detail/childComps/DetailSection'
    import timg1 from '@/assets/images/timg1.jpg'
    import timg2 from '@/assets/images/timg2.jpg'
    import timg3 from '@/assets/images/timg3.jpg'
    import timg4 from '@/assets/images/timg4.jpg'
    import timg5 from '@/assets/images/timg5.jpg'
    export default {
      name: "Detail",
      components: {DetailSwiper,DatePicker,DetailSection},
      data(){
        return{
          banners:[
            {image: timg1,describe:'崀山'},
            {image: timg2,describe:'毛泽东故居'},
            {image: timg3,describe:'凤凰古城'},
            {image: timg4,describe:'天门山'},
            {image: timg5,describe:'橘子洲头'}
          ],
          recommend:{
            sight: '凤凰古城',
            city: '湘西',
            price: 223,
            sellCount:11148,
            describe:'凤凰古城位于湖南省湘西自治州西南边，有一山酷似展翅而飞的凤凰，古城因此而得名。凤凰因沈从文的小说《边城》而闻名于世，引发更多关注。古城内的青石板街道、江边木结构吊脚楼、众多古建筑，以及浓厚的苗族风情，构成了凤凰独具一格的味道。从《边城》到《从文自传》再到《湘行散记》，沈从文以散淡而有韵味的文字营造了一座文城胜景。吊脚楼、茶峒小街、绳渡白塔……构筑起了千百万读者心中的凤凰古城，梦里的边城。凤凰古城、镇远、乌镇、丽江古城、长汀、平遥、敦煌和新疆布尔津白哈巴村共同评为蜜月必去中国美丽的八个小镇。'
          },
          ticketCount:0,
          sections:[
            {titleName:'景区电话',message:{phone:'0743-3502059'}},
            {titleName:'开放时间',message:{openTime:'全年 (周一至周日) 全天：00:00-23:59'}},
            {titleName:'景点地址',message:{site:'湘西土家族苗族自治州凤凰县喜鹊坡路附近',route:'(1)怀化火车站/怀化南站→凤凰↵1.怀化火车站到凤凰古城：到怀化火车站后，可在怀化西客站乘大巴到凤凰古城。怀化汽车西站每天7:00~17:00，每2小时一班去凤凰古城的班车，票价29元。西客站距离火车站大概1公里，步行需要20分钟，有17路公交车可以到达，打车的话10元左右。↵2.怀化南站（高铁站）到凤凰古城：在高铁站下车后也需要去怀化汽车西站乘坐大巴前往凤凰古城。怀化南站距离怀化汽车西站有8公里的车程，打车需要20元左右。也可以乘坐19路公交车到火车站，再换乘17路到汽车西站。↵(2)吉首火车站到凤凰古城：↵火车站出站口往左手边走180米到达吉首市汽车北站，这里的大巴车23元/人，一般要等车上满客才发车，不过一列火车下来的客人足可以坐满一辆大巴车。全程高速，80分钟即可到达。↵如果您去的不巧，汽车已经坐满了，可在火车站乘出租车5元/辆去吉首汽车南站坐空调线路班车来凤凰，最早一班车为上午7点，最晚一班车为下午18点，20分钟一班车，17元/人，同样也是80分钟，汽车南站的车是停在凤凰城北车站离古城不远，打的5元/人或坐1路公车1元/人到南华门下，南华门就是古城的其中一个入口。'}},
            // {titleName:'景点地址',message:{site:'湘西土家族苗族自治州凤凰县喜鹊坡路附近'}},
            {titleName:'优待政策',message:{policy:'儿童*1.3米（不含）以下免费，身高1.3米（含）-1.4米（不含）享半价优惠票*老年人*60周岁（含）以上凭老年证或身份证享半价优惠*残疾人*凭残疾证享半价优惠*军残人员*凭军官证享半价优惠*大中小学生*在校大学生凭大学生证享受优惠票'}},
            {titleName:'景区图片',message:{
              images:[
                'https://m.tuniucdn.com/filebroker/cdn/olb/86/55/86556f142b5e7b8e6325bc8cf1ddee42_w755_h0_c0_t0.jpg',
                'https://m.tuniucdn.com/filebroker/cdn/olb/4d/f6/4df6911f2d66ad377acca7fdab80b2e7_w800_h0_c0_t0.jpg',
                'https://m.tuniucdn.com/filebroker/cdn/olb/46/6d/466df0ec6a9bb6118a6f09ba32f78087_w755_h0_c0_t0.jpg',
                'https://m.tuniucdn.com/filebroker/cdn/olb/31/5d/315d0e0eeebcd110f155145a68b61f53_w755_h0_c0_t0.jpg',
                'https://m.tuniucdn.com/filebroker/cdn/online/9f/4d/9f4d1809_w755_h0_c0_t0.jpg',
                'https://m.tuniucdn.com/filebroker/cdn/olb/f4/8e/f48e7cf8ff93f6340a65d7379ace09e4_w755_h0_c0_t0.jpg'
              ]}},

          ],
          isNavItem:'',
        }
      },
      computed:{
        conciseSellCount(){
          if (this.recommend.sellCount>=10000){
            return (this.recommend.sellCount/10000).toFixed(1) + 'w'
          }else {
            return this.recommend.sellCount
          }
        }
      },
      methods:{
        dateSelection(date){
          console.log('我是父组件，我得到日期为'+date.getFullYear()+(date.getMonth()+1)+date.getDate())
        },
        navItem(item){
          this.isNavItem = item
          let sections = this.$refs.section;
          this.sections.forEach((i,index) => {
            if (i.titleName === item) {
              document.documentElement.scrollTop = sections[index].$el.offsetTop - 110
              //-100为了减去2个nav的高度再加上自己的边距
            }
          })

        },
        handleScroll(){
          let scrollTop= (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
          let sectionsNav = this.$refs.nav
          let sectionsFakeNav = this.$refs.fakeNav
          // console.log(sectionsFakeNav);
          // console.log(top);
          if (sectionsNav.offsetTop<=scrollTop+60) {
            sectionsFakeNav.style.display='block'
            sectionsFakeNav.style.position='fixed'
            sectionsFakeNav.style.top=50 + 'px'
            sectionsFakeNav.style.width=1200 + 'px'
          }else {
            sectionsFakeNav.style.display='none'
          }
          let sections = this.$refs.section;
          sections.forEach((item,index,arr) => {
            let offsetTop = item.$el.offsetTop - 112;
            //-112为了减去2个nav的高度和边框
            let superiorsOffsetTop = 0 ;
            if(arr[index+1]){
              superiorsOffsetTop = arr[index+1].$el.offsetTop;
            }
            if (superiorsOffsetTop !== 0 && offsetTop <= scrollTop && superiorsOffsetTop >= scrollTop) {
              console.log(this.sections[index].titleName);
              this.isNavItem = this.sections[index].titleName
            }
            else if(offsetTop <= scrollTop && superiorsOffsetTop === 0){
              console.log(this.sections[index].titleName);
              this.isNavItem = this.sections[index].titleName
            }
          })
        }
      },
      created(){
        window.addEventListener('scroll',this.handleScroll,true);
      },
    }
</script>

<style lang="scss" scoped>
  .bg{
    background-color: whitesmoke;
  }
  .detail{
    padding-top: 50px;
    width: 1200px;
    margin: 0 auto;
    background-color: white;
    .product-intro{
      display: flex;
      margin: 0 10px;
      .detail-swiper{
        flex: 1;
        width: 400px;
        height: 300px;
      }
      .recommend{
        flex: 1;
        padding:0 20px 0;
        .summary{
          position: relative;
          .sell-count{
            position: absolute;
            top:10px;
            left: 400px;
            span{
              font-size: 30px;
              color: #bb0000;
            }
          }
          h2{
            font-size: 35px;
          }
          h3{
            font-size: 18px;
            line-height: 40px;
          }
          span{
            color: seagreen;
          }
          .describe{
            max-height: 200px;
            /*border: 1px seagreen solid;*/
            font-size: 14px;
            line-height: 30px;
          }
        }
        .product-intro-buy{
          margin-top: 15px;
          display: flex;
          .buy{
            height: 40px;
            width: 100px;
            background-color: #008059;
            text-align: center;
            line-height: 40px;
            font-size: 20px;
          }
          .detail-date{
            width: 100px;
            margin-left: 20px;
          }
          .ticket-Count{
            /*border: 1px seagreen solid;*/
            margin-left: 30px;
            height: 40px;
            button{
              width: 40px;
              height: 100%;
            }
            span{
              margin: 0 10px;
            }
          }
        }
      }
    }
    .detail-sections{
      margin-top: 30px;
      div{
        margin-bottom: 20px;
      }
      .sections-nav{
        width: 100%;
        height:50px;
        line-height: 50px;
        border-top: 1px #00bb90 solid;
        border-left: 1px #00bb90 solid;
        background-color: #00bb90;
        position: static;
        z-index: 10;
        .nav-item{
          height: 100%;
          width: 150px;
          float: left;
          text-align: center;
          font-size: 16px;
          background-color: #00bb90;
          transition: all 0.2s linear;
        }
        .isNavItem{
          background-color: white;
        }
      }
      .item-phone{
        h2{
          color: #00a47d;
        }
        p{
          line-height: 50px;
        }
      }
      .open-time{

      }
    }
    .fake{
      display: none;
    }
  }

</style>
