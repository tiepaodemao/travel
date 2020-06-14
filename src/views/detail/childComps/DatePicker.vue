<template>
  <div v-click-outside>
    <input class="detail-input" type="text" :value="atPresentTime">
    <div class="pannel" v-show="isVisible">
      <div class="calendar-body-text">
        <div @click="retreatMonth" style="text-align: right"> < </div>
        <div>{{atPresentTime}}</div>
        <div @click="advanceMonth" style="text-align: left"> > </div>
      </div>
      <table>
        <thead>
        <tr>
          <th v-for="item in weekList">{{item}}</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="i in 6" :key="i">
            <td v-for="j in 7" :key="j"
                @click="DateClick(visibeDays[(i-1)*7+(j-1)])"
                :class="[
                {notCurrentMonth:!isCurrentMonth(visibeDays[(i-1)*7+(j-1)])},
                {toDay:isToday(visibeDays[(i-1)*7+(j-1)])}
                ]">
              {{visibeDays[(i-1)*7+(j-1)].getDate()}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DatePicker",
      directives:{
        clickOutside:{
          bind(el,bindings,vnode){
            let handler = (e) => {
              if (el.contains(e.target)) {
                if(!vnode.context.isVisible){
                  vnode.context.focus();
                }

              }else {
                if(vnode.context.isVisible){
                  vnode.context.blur();
                }

              }

            }
            el.hander = handler;
            document.addEventListener('click',handler)

          },
          unbind(el){
            document.removeEventListener('click', el.hander)
          }
        }
      },
      data(){
        return{
          day:0,
          month:0,
          year:'',
          isVisible:false,
          weekList:['日', '一', '二', '三', '四', '五', '六'],
        }
      },
      computed:{
        visibeDays(){
          let currentFirstDay=new Date(this.year,this.month,1);
          // 获得本月说星期几
          let week = currentFirstDay.getDay();
          //当前开始的天数
          let startDay = currentFirstDay - week * 1000 * 60 *60 * 24
          let arr= [];
          for (let i=0;i<42;i++){
            arr.push(new Date(startDay+(i * 1000 * 60 *60 * 24)))
          }
          return arr;
        },
        atPresentTime(){
          return this.year+'-'+(this.month+1)+'-'+this.day
        }
      },
      methods: {
        advanceMonth(){
          if (this.month<11) {
            this.month++
          }else if (this.month >= 11) {
            this.month=0
            this.year++
          }

        },
        retreatMonth(){
          if (this.month>0) {
            this.month--
          }else if(this.month<=0){
            this.month=11
            this.year--
          }

        },
        DateClick(date){
          console.log(date.getDate());
          if (date.getMonth() === this.month){
            this.day = date.getDate();
            this.$emit('dateSelection',date)//向父组件发出事件
          }

        },
        isCurrentMonth(date){
          let y = date.getFullYear();
          let m = date.getMonth();
          return this.year === y && m === this.month;
        },
        isToday(date){
          return this.day === date.getDate() && this.month === date.getMonth() && this.year === date.getFullYear()

        },
        focus(){
          this.isVisible=true
        },
        blur(){
          this.isVisible=false
        },
        dataAssignment(date) {
          this.year = date.getFullYear();
          this.day = date.getDate();
          this.month = date.getMonth();

        }
      },
      created(){
        this.dataAssignment(new Date());
      },
    }
</script>

<style lang="scss" scoped>
  .detail-input{
    height: 35px;
    width: 100%;
    text-align: center;
    font-size: 15px;
  }
  .pannel{
    border: 1px solid #e2e2e2;
    background-color: #fbfbfb;
    text-align: center;
    font-size: 13px;
    position: absolute;
    .calendar-body-text{
      display: flex;
      line-height: 40px;
      div{
        flex: 1;
      }
    }
    table{
      border-collapse:collapse;
      border: 1px solid #cff2e8;
      margin:0 20px 20px 20px;
      tr{
        th{
          line-height: 30px;
        }
        td{
          border: 1px solid #ddf5e5;
          height: 25px;
          width: 40px;
          &:hover{
            color: #06f100;
            border:#00a47d;
          }
        }
        .notCurrentMonth{
          color: #c6cec9;
        }
        .toDay{
          color: #06f100;
          background-color: #00a47d;
        }
      }
    }
  }
</style>
