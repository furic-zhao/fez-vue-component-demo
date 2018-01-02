<template>
  <div>
    {{footer}}
  </div>
</template>
<script>
import Service from '../../service';

export default {
  name: 'page-footer',
  data() {
    return {
      footer: ""
    }
  },
  created() {
    Service.footer().then((data) => {
      this.footer = data.footer;
    });
  }
}

</script>
