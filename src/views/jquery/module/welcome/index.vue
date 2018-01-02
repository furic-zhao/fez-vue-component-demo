<template>
  <div>
    <h1>{{welcome}}</h1>
    <div id="js-jqueryDom"></div>
    <button id="js-jqueryBtn">点我使用jquery操作dom数据</button>
  </div>
</template>
<script>
import Service from '../../service';

export default {
  name: 'welcome',
  data() {
    return {
      welcome: ""
    }
  },
  mounted() {
    Service.welcome().then((data) => {
      this.welcome = data.welcome;
      $("#js-jqueryDom").html(data.jqueryDom).css("color", "red");
    });

    // 绑定jquery事件
    $("#js-jqueryBtn").on("click", function() {
      $("#js-jqueryDom").html("使用jquery改变了内容").css("color", "green");
    });
  }
}

</script>
