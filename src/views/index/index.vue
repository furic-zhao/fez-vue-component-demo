<template>
  <div>
    <!-- 页面公共header -->
    <page-header></page-header>
    <!-- welcome 组件 -->
    <welcome></welcome>
    <!-- 页面公共footer -->
    <page-footer></page-footer>
  </div>
</template>
<script>
import welcome from './module/welcome';
import pageHeader from 'public/module/header';
import pageFooter from 'public/module/footer';

export default {
  components: {
    welcome,
    pageHeader,
    pageFooter
  }
}

</script>
