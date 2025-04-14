<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>

export default {
  data() {
    return {
      data: {},
    }
  },
  mounted() {
    let url = import.meta.env.VITE_API_URL
    console.log(url)
    this.axios.get(url).then((response) => {
      console.log(response);
      this.data = response.data.results[0]
    })
  },
}

</script>
