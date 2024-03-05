<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script>
import Layout from "./views/Layout.vue";
// import Layout_test from "./views/Layout_test.vue";
// 「../」是上一層，但我們要同一層「./」

export default {
  components: {
    Layout,
    // Layout_test,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>
