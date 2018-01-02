<template>
  <div>
    <h1>{{welcomeMsg}}</h1>
    <button v-on:click="eventToParent">使用bus传递点击事件和数据</button>
  </div>
</template>
<script>
import bus from '../../bus';
export default {
  name: 'welcome',
  props: ['welcomeMsg'],
  methods: {
    eventToParent() {
      bus.$emit('updateTxt', "使用bus方式进行组件间的通信")
    }
  }
}

</script>
