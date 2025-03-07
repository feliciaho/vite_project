<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props:["id"],
  mounted() {
    // 動態路由存在params這個參數裡面
    // console.log(this.$route.params.id);
    let url = import.meta.env.VITE_API_URL;
    const seed = ('props',this.id);
    this.axios.get(url+`?seed=${seed}`).then((response) => {
      this.data = response.data
      console.log(this.data)
    });
  },
}
</script>
