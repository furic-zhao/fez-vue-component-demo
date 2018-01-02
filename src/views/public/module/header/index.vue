<template>
  <div>{{header}}</div>
</template>
<script>
import Service from '../../service';
export default {
  name: 'page-header',
  data() {
    return {
      header: ""
    }
  },
  created() {
    Service.header().then((data) => {
      this.header = data.header
    });
  }
}

</script>
