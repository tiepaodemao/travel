<template>
  <div class="about">
    <img :src="bgImg"/>
    <div class="editor">
      <div class="paragraph">
      <p>旅游是非定居者的旅行和暂时居留而引起的一种现象及关系的总和。这些人不会因而永久居留，并且主要不从事赚钱的活动。</p>
      </div>
      <hr/>
      <div class="title">
        <p><span>基本概念</span></p>
        <p><span>Basic concept</span></p>
      </div>
      <div class="paragraph">
        <p>旅游（Tour）来源于拉丁语的“tornare”和希腊语的“tornos”旅游山水其含义是“车床或圆圈；围绕一个中心点或轴的运动。”这个含义在现代英语中演变为“顺序”。后缀—ism被定义为“一个行动或过程；以及特定行为或特性”，而后缀—ist则意指“从事特定活动的人”。词根tour与后缀—ism和—ist连在一起，指按照圆形轨迹的移动，所以旅游指一种往复的行程，即指离开后再回到起点的活动；完成这个行程的人也就被称为旅游者（Tourist）。 </p>
      </div>
      <hr/>
      <div class="title">
        <p><span>我们的愿景</span></p>
        <p><span>Our vision</span></p>
      </div>
      <div class="paragraph">
        <p>在两次世界大战的间歇期间，世界国际旅游收入增长迅速，因此在统计上迫切需要有一个更准确的定义。1936年举行的一个国际论坛，国家联盟统计专家委员会首次提出，“外国旅游者是指离开其惯常居住地到其他国家旅行至少24小时以上的人”。1945年，联合国（取代了原来的国家联盟）认可了这一定义，但是增加了“最长停留时间不超过6个月”的限定。</p>
      </div>
      <hr/>
      <div class="paragraph">
        <p>世界旅游日 (World Tourism Day），是由世界旅游组织确定的旅游工作者和旅游者的节日。1970年9月27日，国际官方旅游联盟（世界旅游组织的前身）在墨西哥城召开的特别代表大会上通过了将要成立世界旅游组织的章程。1979年9月，世界旅游组织第三次代表大会正式将9月27日定为世界旅游日。选定这一天为世界旅游日，一是因为世界旅游组织的前身“国际官方旅游联盟”于1970年的这一天在墨西哥城的特别代表大会上通过了世界旅游组织的章程。此外，这一天又恰好是北半球的旅游高峰刚过去，南半球的旅游旺季刚到来的相互交接时间</p>
      </div>
      <hr/>
      <div class="paragraph">
        <p>中国于1983年正式成为世界旅游组织成员。自1985年起，每年都确定一个省、自治区或直辖市为世界旅游日庆祝活动的主会场</p>
      </div>
    </div>
  </div>
</template>

<script>
    import bgImg from '@/assets/images/about/1523263196.jpg'
    export default {
      name: "About",
      data(){
        return{
          bgImg: bgImg
        }
      }
    }
</script>

<style lang="scss" scoped>
  .about{
    width: 1450px;
    img{
      width: 100%;
      height: auto;
    }
    .editor{
      width: 1000px;
      margin: 0 auto 50px;
      padding: 100px 80px;
      border: 1px #ddece4 solid;
      border-radius: 15px 15px;
      font-family: 微软雅黑;
      .title{
        p{
          color: black;
          font-size: 25px;
          line-height: 40px;
        }
      }
      .paragraph{
        p{
          line-height: 30px;
          font-size: 17px;
        }
      }
      hr{
        border: 1px solid #deede5;
        margin: 20px 0;
      }
    }
  }
</style>
