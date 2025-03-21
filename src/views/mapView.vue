<template>
  <div>mapState & mapActions</div>
  <div>
    {{ name }}
  </div>
  <div>
    {{ getUserName }}
  </div>
  <button type="button" @click="updateName">click</button>
</template>
<script>
  import { mapState, mapActions } from 'pinia';
  import userStore from '@/stores/user';

  export default {
  // 帶入state或是getters
    computed:{
      // mapState 用來取得state
      // mapActions 用來取得actions
      ...mapState(userStore, ['name', 'getUserName']),
      ...mapActions(userStore, ['updateName'])
    }
  };
</script>
