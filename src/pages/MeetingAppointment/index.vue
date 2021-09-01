<template>
  <div class="header">
    <span>返回</span>
    <span>预约会议</span>
    <span>提交</span>
  </div>
  <div class="content">
    <van-field
      v-model="meetingTheme"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="请输入会议主题"
      show-word-limit
    />
    <div
      class="lineItem"
      v-for="item in items"
      :key="item.path"
      @click="clickItem(item.path)"
    >
      {{ item.title }}
    </div>
  </div>
  <div class="view">
    <router-view
      :changeParams="changeParams"
      :lineItems="items"
      @submitParams="handleSubmitParams"
      :changeLineItems="changeLineItems"
    ></router-view>
  </div>

  <button @click="testChange">测试修改</button>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    let items = reactive([
      {
        title: "请选择会议模式11",
        path: "/meetingAppointment/model",
      },
      {
        title: "请选择会议室22",
        path: "/meetingAppointment/rooms",
      },
    ]);
    const appointmentInfo = reactive({
      meetingTheme: undefined,
    });
    const router = useRouter(); //路由器对象
    // const currRoute = useRoute();  //当前路由对象

    const clickItem = (path) => {
      router.push(path);
    };
    const testChange = () => {
      items = [];
    };

    const changeParams = (param) => {
      console.log(param, "param");
    };
    const handleSubmitParams = (param) => {
      console.log(param, "param----->>>");
    };

    const changeLineItems = () => {
      console.log("change");
      items = [
        {
          title: "22222222",
          path: "11111",
        },
      ];
    };

    watch(appointmentInfo.lineItems, (newV) => {
      console.log(newV, "newv lineItems---------------->>>");
    });

    console.log(items, "items");
    // provide("appointmentInfo", items);
    // provide("changeLineItems", changeLineItems);
    return {
      ...toRefs(appointmentInfo),
      items,
      clickItem,
      changeParams,
      changeLineItems,
      testChange,
      handleSubmitParams,
    };
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  height: 2rem;
  align-items: center;
}
/* .view {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
} */
</style>