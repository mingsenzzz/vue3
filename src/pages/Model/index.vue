<template>
  <div class="header" ref="headerRef">
    <div>返回</div>
    <div @click="submit">提交</div>
  </div>
  <van-radio-group v-model="checkedModel">
    <van-cell-group>
      <van-cell
        v-for="item in modelTypes"
        :key="item.id"
        :title="item.title"
        clickable
        @click="checkedModel = item.id"
      >
        <template #right-icon>
          <van-radio :name="item.id" />
        </template>
      </van-cell>
    </van-cell-group>
  </van-radio-group>
</template>

<script>
import {
  // getCurrentInstance, //获取当前组件实例对象
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
export default {
  components: {},
  props: {
    changeParams: Function,
    lineItems: Array,
    changeLineItems: Function,
  },
  //emits: ["submitParams"],     //新增的属性，用于声明，父组件监听的事件
  emits: {
    submitParams(data) {
      console.log(data, "data");
      console.log("触发自定义函数的验证函数");
      //必须return 一个boolean值 true \ false
      return 1 + 1 === 3;
    },
  },
  setup(props, context) {
    const checkedModel = ref("ENERGY");
    const headerRef = ref(null); //借助ref来实现$refs
    const modelInfo = reactive({
      modelTypes: [
        { title: "空间占用", id: "ENERGY" },
        { title: "远程会议", id: "VIDEO" },
      ],
    });
    const submit = () => {
      context.emit("submitParams", "数据");
    };
    watch(checkedModel, (newV) => {
      console.log(newV, "newV");
      props.changeLineItems();
    });
    onMounted(() => {
      console.log(headerRef, "headerRef");
    });
    return {
      ...toRefs(modelInfo),
      checkedModel,
      submit,
      // headerRef,
    };
  },
};
</script>