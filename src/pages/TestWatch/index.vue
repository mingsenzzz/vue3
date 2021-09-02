<template>
  <div>
    <input v-model="firstName" />
    <input v-model="lastName" />
    <input v-model="fullName" />
  </div>

  <div>
    <div>姓名： {{ userInfo.name }}</div>
    <div>年龄： {{ userInfo.age }}</div>
    <div>性别： {{ userInfo.gender }}</div>
    <button @click="changePersonInfo">修改用户信息</button>
  </div>

  <div><button @click="testArrayWatch">测试数组watch</button>></div>
</template>

<script>
import { reactive, ref, watch } from "vue";
import { computed } from "vue";

export default {
  setup() {
    let firstName = ref("");
    let lastName = ref("");

    const userInfo = reactive({
      name: "lele",
      age: 24,
      gender: "男",
      innerInfo: {
        job: {
          type: "react",
          location: "beijing",
        },
      },
    });

    const hobbies = reactive(["抽烟", "烫头"]);
    const fullName = computed({
      get() {
        return firstName.value + "-" + lastName.value;
      },
      set(newV) {
        const arr = newV.split("-");
        firstName.value = arr[0];
        lastName.value = arr[1];
      },
    });

    const changePersonInfo = () => {
      userInfo.innerInfo.job.type = "vue";
    };

    const testArrayWatch = () => {
      hobbies[0] = "1111";
    };

    watch([firstName, lastName], (newV) => {
      console.log(newV, "newV");
    });

    watch(
      userInfo,
      (newV) => {
        console.log(newV, "UserInfo");
      },
      {
        deep: true,
        immediate: true,
      }
    );

    watch(hobbies, (newV) => {
      console.log(newV, "hobbies");
    });
    return {
      firstName,
      lastName,
      fullName,
      userInfo,
      hobbies,
      testArrayWatch,
      changePersonInfo,
    };
  },
};
</script>

<style>
</style>