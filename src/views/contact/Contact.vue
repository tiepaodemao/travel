<template>
  <div class="contact">
    <p>联系我们</p>
    <input type="text" placeholder="姓名" v-model="opinionName"/><br/>
    <input type="text" placeholder="电话" v-model="opinionPhone"/><br/>
    <input type="text" placeholder="邮箱" v-model="opinionEmail"/><br/>
    <textarea placeholder="留言内容" class="message-board" v-model="opinionContent"></textarea>
    <input type="submit" value="提交" class="submit"/><br/>
  </div>
</template>

<script>
    export default {
      name: "Contact",
      data(){
        return{
          opinionName:'',
          opinionPhone:'',
          opinionEmail:'',
          opinionContent:'',
        }
      }
    }
</script>

<style lang="scss" scoped>
  .contact{
    width: 800px;
    padding: 40px 40px;
    margin: 50px auto 50px;
    border-radius: 5px 5px;
    border: 1px seagreen solid;
    box-shadow: 10px 10px 5px #dfe8e5;
    p{
      font-size: 30px;
      text-align: center;
      margin-bottom: 30px;
    }
    input,textarea{
      width: 100%;
      height: 50px;
      margin-bottom: 30px;
      border: 2px #e6f3f0 solid;
      outline: none;
      padding-left: 10px;
      &:focus{
        border: 2px solid #178b83;
      }
      &::placeholder{
        color: #9dada4;
        font-size: 15px;
      }
    }
    .message-board{
      height: 200px;
      resize: none;
      &::placeholder{
      }
    }
    .submit{
      background-color: #00a47d;
      transition: all 0.7s ease-in-out;
      &:hover{
        background-color: #00be92;
      }
    }
  }
</style>
