<template>
  <div @click="bol = !bol">
    22222
    {{ bol }}

    <br />
    <div>a: {{ numbers.a }}</div>
    <div @click="addOne">点我加加</div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      bol: false,
      numbers: {
        a: 1,
        b: 2,
      },
    };
  },
  methods: {
    clickIt() {
      console.log("22222222222");
    },
    addOne() {
      this.numbers.a++;
    },
  },
  computed: {
    text: {
      get() {
        return this.bol ? "真" : "假";
      },
    },
  },
  watch: {
    bol: {
      //当bol发生改变时才执行
      handler(newValue, oldValue) {
        console.log(newValue, "newValue");
        console.log(oldValue, "oldValue");
      },
      immediate: true, //初始化时，让handler执行一次
    },
    "numbers.a": {
      //检测numbers里面的a属性的变化
      handler(va) {
        console.log(va, "va");
      },
    },
    numbers: {
      deep: true, //深度监视
      handler(newV) {
        console.log(newV, "newV");
      },
    },
  },
};
</script>

<style>
</style>
