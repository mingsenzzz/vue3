<template>
  <div>
    home
    <button @click="jumpToChild">跳转到子组件</button>
    <p>home---------------child</p>
    <router-view :testProp="2"></router-view>
  </div>
</template>

<script>
import "../../Proxy";
export default {
  data() {
    return {};
  },
  methods: {
    jumpToChild() {
      this.$router.push("/home/child");
    },
  },
};
</script>