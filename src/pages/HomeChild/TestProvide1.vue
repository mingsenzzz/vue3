<template>
  <div>
    <span v-for="item in hobbies" :key="item.id"> {{ item.name }}</span>
  </div>
  <button @click="changeInfo">修改信息1111</button>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const hobbies = inject("hobbies");
    const changeInfo = inject("changeInfo");
    return {
      hobbies,
      changeInfo,
    };
  },
};
</script>

<style>
</style>
