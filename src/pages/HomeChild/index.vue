<template>
  <div>名称：{{ name }}</div>
  <div>职业：{{ job.type }}</div>
  <div>个数：{{ job.salary }}</div>
  <div v-for="item in hobbies" :key="item.id">爱好：{{ item.name }}</div>
  <div>测试ref 深层对象name：{{ job.innerInfo.name }}</div>
  <div>测试reactive 深层对象name:{{ job2.innerInfo.name }}</div>
  <div>计算之后的number: {{ computedNumber }}</div>
  <div>计算之后的number2: {{ computedNumber2 }}</div>
  <div @click="changeInfo">修改信息</div>

  <HomeInnerChild />
</template>

<script>
import HomeInnerChild from "./HomeInnerChild.vue";
import { ref, watch, reactive, computed, provide } from "vue";
export default {
  components: {
    HomeInnerChild,
  },
  setup() {
    let name = ref("mingsen");
    const number1 = ref(1);
    const number2 = ref(0);
    let job = reactive({
      salary: 1,
      type: "frontEnd",
      innerInfo: {
        name: "innerName1",
      },
    });
    let job2 = ref({
      salary: 1,
      innerInfo: {
        name: "innerName2",
      },
    });
    const hobbies = reactive([
      {
        name: "抽烟 ",
        id: 1,
      },
      {
        name: "喝酒",
        id: 2,
      },
    ]);
    const changeInfo = () => {
      job.type = "backEnd";
      job.innerInfo.name = "innerName11111";
      job2.value.innerInfo.name = "innerName222";
      hobbies[0].name = "烫头";
    };

    const onNameChange = (newName, oldName) => {
      console.log(newName, "newName");
      console.log(oldName, "oldName");
    };
    // const onJobChange = (newJob, oldJob) => {
    //   console.log(newJob, "newJob");
    //   console.log(oldJob, "oldJob");
    // };

    //监听name这个ref
    watch(name, onNameChange);

    const computedNumber = computed(() => {
      return number1.value + 1;
    });

    const computedNumber2 = computed(() => {
      return number2.value + 1;
    });
    // watch(job.type, onJobChange);
    provide("hobbies", hobbies);
    provide("changeInfo", changeInfo);
    return {
      name,
      changeInfo,
      computedNumber,
      computedNumber2,
      job,
      job2,
      hobbies,
    };
  },
};
</script>

<style>
</style>