<template>
  <div id="login" ref="login">
    <div class="login-tab">
      <div id="tabLeft" @click="tabLeft">登录</div>
      <div id="tabRight" @click="tabRight">注册</div>
    </div>
    <div class="pulley" ref="pulley"></div>
    <div class="form-login" v-show="isForm">
      <div class="input">
        <img src="~@/assets/images/login/denglu.png"/>
        <input type="text" v-model="name" placeholder="用户名"/>
      </div>
      <div class="input">
        <img src="~@/assets/images/login/icon-test.png"/>
        <input type="password" v-model="password" placeholder="密码"/>
      </div>
      <div class="login-btn" @click="enter">
        登录
      </div>
    </div>
    <div class="form-login" v-show="!isForm">
      <div class="input">
        <img src="~@/assets/images/login/denglu.png"/>
        <input type="text" v-model="name" placeholder="注册名只能是数字或字母且长度>=3 && <=7"/>
      </div>
      <div class="promptColor" :class="{isPromptColor:!namePromptColor}">{{namePrompt}}</div>
      <div class="input">
        <img src="~@/assets/images/login/icon-test.png"/>
        <input type="password" v-model="password" placeholder="密码>=3 && <=10" />
      </div>
      <div class="promptColor" :class="{isPromptColor:!passwordPromptColor}">{{passwordPrompt}}</div>
      <div class="input">
        <img src="~@/assets/images/login/icon-test.png"/>
        <input type="password" v-model="passwordTwo" placeholder="确认密码" />
      </div>
      <div class="promptColor" :class="{isPromptColor:!passwordTwoPromptColor}">{{passwordTwoPrompt}}</div>
      <div class="login-btn" @click="enroll">
        注册
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Login",
      data(){
        return{
          name:'',
          nameRegExp:/^.[a-z][1-9]{3,7}$/,
          namePrompt:'请输入',
          namePromptColor:true,
          password: '',
          passwordRegExp:/^.{3,10}$/,
          passwordPrompt:'请输入',
          passwordPromptColor:true,
          passwordTwo:'',
          passwordTwoPrompt:'请输入',
          passwordTwoPromptColor:true,
          isForm:true
        }
      },
      watch:{
        name(val){
          if (val.length>7) {
            this.namePrompt='长度>7'
            this.namePromptColor=false
          }else if(val.length<3){
            this.namePrompt='长度<3'
            this.namePromptColor=false
          }else {
            this.namePrompt='正确'
            this.namePromptColor=true
          }
        },
        password(val){
          if (val.length>7) {
            this.passwordPrompt='长度>7'
            this.passwordPromptColor=false
          }else if(val.length<3){
            this.passwordPrompt='长度<3'
            this.passwordPromptColor=false
          }else {
            this.passwordPrompt='正确'
            this.passwordPromptColor=true
            if(this.password===this.passwordTwo){
              this.passwordTwoPrompt='正确'
              this.passwordTwoPromptColor=true
            }else {
              this.passwordTwoPrompt='密码不一致'
              this.passwordTwoPromptColor=false
            }
          }
        },
        passwordTwo(val){
          if (val === this.password) {
            this.passwordTwoPrompt='正确'
            this.passwordTwoPromptColor=true
          }else {
            this.passwordTwoPrompt='密码不一致'
            this.passwordTwoPromptColor=false
          }
        }
      },
      methods:{
        tabLeft(){
          this.isForm=true
          let login=this.$refs.login
          let pulley=this.$refs.pulley
          let timerLogin=setInterval(() => {
            if (login.offsetHeight<=300){
              clearInterval(timerLogin);
            }else {
              login.style.height =login.offsetHeight - 5 + 'px'
            }
          },5)
          let timerPulley = setInterval(() => {
            if (pulley.offsetLeft <= 80) {
              clearInterval(timerPulley);
            } else {
              console.log(pulley.offsetLeft);
              pulley.style.left = pulley.offsetLeft - 5 + 'px'
            }

          },5)
        },
        tabRight() {
          this.isForm = false
          let login = this.$refs.login
          let pulley=this.$refs.pulley
          let timerLogin = setInterval(() => {
            if (login.offsetHeight >= 450) {
              clearInterval(timerLogin);
            } else {
              login.style.height = login.offsetHeight + 5 + 'px'
            }
          },8)
          let timerPulley = setInterval(() => {
            if (pulley.offsetLeft >= 280) {
              clearInterval(timerPulley);
            } else {
              console.log(pulley.offsetLeft);
              pulley.style.left = pulley.offsetLeft + 5 + 'px'
            }
          },5)
        },
        enroll(){
          console.log('注册');
          if(this.nameRegExp.test(this.name) && this.passwordRegExp.test(this.password)  && this.password === this.passwordTwo){
            console.log('注册成功');
          }else {
            alert('请核对后重试')
          }

        },
        enter(){
          console.log('登录');
        }
      },
      mounted(){

      }
    }
</script>

<style lang="scss" scoped>
  #login{
    width: 400px;
    height: 300px;
    margin: 100px auto 0;
    /*padding: 50px;*/
    /*background-color: #deffed;*/
    border: 1px seagreen solid;
    border-radius: 10px 10px;
    position: relative;
    .login-tab{
      margin-top: 30px;
      display: flex;
      div{
        flex: 1;
        text-align: center;
      }
      #tabRight:target{
        color: red;
      }
    }
    .pulley{
      height: 2px;
      width: 40px;
      background-color: #00a47d;
      position: absolute;
      left: 80px;
      top:55px;
    }
    .form-login{
      width: 300px;
      margin: 50px auto 0;
      .input{
        border: 1px seagreen solid;
        border-radius: 5px 5px;
        margin-top: 20px;
        img{
          vertical-align:middle;
          width: 40px;
          height: 40px;
        }
        input{
          border: 0px;
          font-size: 20px;
          color: seagreen;
          width: 200px;
          margin-left: 10px;
          outline: none;
        }
        input::placeholder{
          color: #b6ccc0;
          font-size: 10px;
        }
      }
    }
    .login-btn{
      width: 100px;
      line-height: 40px;
      text-align: center;
      margin: 30px auto 0;
      border: 1px seagreen solid;
      border-radius: 5px 5px;
      transition: all 0.7s ease-in-out;
      &:hover{
        background-color: #00be92;
      }
    }
  }
  .promptColor{
    color: seagreen;
  }
  .isPromptColor{
    color: #900000;
  }
</style>
