<template>
  <!-- 事件修饰符 -->
  <!-- capture：使用事件捕获模式，由外向内到事件源 -->
  <!-- <div class="parent" @click.capture="click('parent')"> -->

  <div class="parent" @click="click('parent')">
    <!-- self: 只有当事件源是当前元素时，才触发事件 -->
    <!-- <div class="parent" @click.self="click('parent')"> -->

    <!-- prevent：阻止默认行为 -->
    <!-- <a href="www.baidu.com" class="child" @click.prevent="click('child')"
      >child</a
    > -->

    <!--stop：阻止事件冒泡 -->
    <!-- <div class="child" @click.stop="click('child')">child</div> -->

    <!-- once:只执行一次 -->
    <!-- <div class="child" @click.once="click('child')">child</div> -->

    <div class="child" @click="click('child')">child</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    click(param) {
      console.log(param, "----->>>");
    },
  },
};
</script>
<style scoped>
.parent {
  background-color: yellow;
  width: 200px;
  height: 200px;
}
.child {
  background-color: green;
  width: 40px;
  height: 40px;
}
</style>