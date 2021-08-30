<template>
  <div>名称：{{ name }}</div>
  <div>职业：{{ job.type }}</div>
  <div>个数：{{ job.salary }}</div>
  <div>爱好：{{ hobbies }}</div>
  <div>测试ref 深层对象name：{{ job.innerInfo.name }}</div>
  <div>测试reactive 深层对象name:{{ job2.innerInfo.name }}</div>
  <div>计算之后的number: {{ computedNumber }}</div>
  <div>计算之后的number2: {{ computedNumber2 }}</div>
  <div @click="changeInfo">修改信息</div>
</template>

<script>
import { ref, watch, reactive, computed } from "vue";
export default {
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
    const hobbies = reactive(["抽烟", "喝酒"]);
    const changeInfo = () => {
      job.type = "backEnd";
      job.innerInfo.name = "innerName11111";
      job2.value.innerInfo.name = "innerName222";
      hobbies[0] = "烫头";
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