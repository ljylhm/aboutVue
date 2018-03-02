<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
// 上传头像的组件
export default {
  data: function() {
      return {
            mes:"this is a message from v-up-head"   
      }
  },
  methods: {}
};
</script>

<style scoped>
.container{
    width: 100%;
    height: 80px;
    border: 1px solid black;
}
</style>