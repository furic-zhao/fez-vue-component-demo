<template>
  <div>
    <h1>{{welcomeMsg}}</h1>
    <button v-on:click="eventToParent">点我向父组件传递点击事件和数据</button>
  </div>
</template>
<script>
export default {
  name: 'welcome',
  props: ['welcomeMsg'],
  methods: {
    eventToParent() {
      this.$emit('updateTxt', "使用emit改变父组件内容")
    }
  }
}

</script>
