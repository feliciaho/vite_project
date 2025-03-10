<template>
  <button type="button" @click="getRoute">getRoute</button>
  <button type="button" @click="push">push</button>
  <button type="button" @click="replace">replace</button>
  <button type="button" @click="go">go</button>
  <button type="button" @click="addRoute">addRoute</button>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      getRoute(){
        console.log(this.$route);
        console.log(this.$router);
      },
      // 會記錄歷史紀錄
      push(){
        // this.$router.push("namedView")
        this.$router.push({
          name: 'about'
        })
      },
      // 不會記錄歷史紀錄
      replace(){
        this.$router.replace({
          name: 'about'
        })
      },
      // 操作歷史紀錄
      go(){
        this.$router.go(-1)
      },
      // 新增路由
      addRoute(){
        this.$router.addRoute({
          path:'/newabout',
          name: '/newabout',
          component: ()=> import("./AboutNew.vue")
        })
      }
    },
  }
</script>
