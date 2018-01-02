<template>
  <div>
    <!-- 页面公共header -->
    <page-header></page-header>
    <!-- welcome 组件 -->
    <welcome>
      <h1 slot="title">{{slotMessage}}</h1>
      <p>主要内容的一个段落。</p>
      <p>另一个主要段落。</p>
    </welcome>
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
      slotMessage: ''
    }
  },
  components: {
    welcome,
    pageHeader,
    pageFooter
  },
  created() {
    Service.welcome().then((data) => {
      this.slotMessage = data.welcome;
    });
  }
}

</script>
