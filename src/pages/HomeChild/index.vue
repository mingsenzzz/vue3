<template>
  <div>vueChild</div>
</template>

<script>
import moment from "moment";
import _ from "lodash";
export default {
  data() {
    return {
      momentTime: moment(),
    };
  },
  mounted() {
    // console.log(this.getDayRepeatTimeList("weeks", 2, 1), "11111");
    console.log(this.getDayRepeatTimeList("day", 2, 15), "222222");
  },
  methods: {
    /**
     * @param {重复次数} times
     * @param {间隔时间} interval
     */
    getDayRepeatTimeList(type, times, interval) {
      const arr = [this.momentTime];
      const timesArr = [...new Array(times)].map((item, index) => index);
      timesArr.forEach((one, index) => {
        const nextTime = _.cloneDeep(arr[index]).add(type, interval);
        arr.push(nextTime);
      });
      return arr;
    },
  },
};
</script>

<style>
</style>