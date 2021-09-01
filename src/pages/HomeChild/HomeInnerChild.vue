<template>
  <div>
    HomeInnerChild
    {{ hobbies }}
    <TestProvide1111> </TestProvide1111>
  </div>
</template>

<script>
import { inject } from "vue";
import TestProvide1111 from "./TestProvide1";
export default {
  components: {
    TestProvide1111,
  },
  setup() {
    const hobbies = inject("hobbies");
    return {
      hobbies,
    };
  },
};
</script>

<style>
</style>