<template>
  <div>
    <!-- 页面公共header -->
    <page-header></page-header>
    <!-- welcome 组件 -->
    <welcome :welcomeMsg="welcomeMsg" v-on:updateTxt="eventFromParent"></welcome>
    <!-- 页面公共footer -->
    <page-footer></page-footer>
  </div>
</template>
<script>
import welcome from './module/welcome';
import pageHeader from 'public/module/header';
import pageFooter from 'public/module/footer';

import Service from './service';

export default {
  data() {
    return {
      welcomeMsg: ""
    }
  },
  components: {
    welcome,
    pageHeader,
    pageFooter
  },
  created() {
    Service.welcome().then((data) => {
      this.welcomeMsg = data.welcome;
    });
  },
  methods: {
    eventFromParent(data) {
      this.welcomeMsg = data;
    }
  }
}

</script>
