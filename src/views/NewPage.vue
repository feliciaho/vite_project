<template>
  <div>
    選單
    <div>
      <router-link to="/newPage/a">a</router-link>
      <router-link to="/newPage/b">b</router-link>
    </div>
  </div>
  <div>
    <router-view></router-view>
  </div>
  <div>
    {{ name }}
  </div>
</template>
<script>
import { mapState } from 'pinia'
import userStore from '@/stores/user'

export default {
  // 帶入state或是getters
  computed: {
    ...mapState(userStore, ['name', 'getUserName']),
  },
}
</script>
