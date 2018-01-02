<template>
  <div>
    <!-- 页面公共header -->
    <page-header></page-header>
    <!-- welcome 组件 -->
    <welcome :welcomeMsg="welcomeMsg"></welcome>
    <!-- 页面公共footer -->
    <page-footer></page-footer>
  </div>
</template>
<script>
import welcome from './module/welcome';
import pageHeader from 'public/module/header';
import pageFooter from 'public/module/footer';

import Service from './service';

import bus from './bus';

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
  mounted() {
    const _vm = this;
    bus.$on("updateTxt", function(data) {
      _vm.welcomeMsg = data;
    });
  }
}

</script>
