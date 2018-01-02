<template>
  <div>{{welcome}}</div>
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
  created() {
    Service.welcome().then((data) => {
      this.welcome = data.welcome
    });
  }
}

</script>
