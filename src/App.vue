<template>
  <div>
    <div>
      <label for="">Value: </label>
      <input type="number" v-model="value">
    </div>
    <div>
      <label for="">Duration of animation: </label>
      <input type="number" v-model="duration">
    </div>
    <animated-number
      :value="value"
      :formatValue="formatToPrice"
      :duration="duration"
      :run="run"
    />
    <hr>
    <button @click="increase">Increase 500</button>
    <button @click="decrease">Decrease 500</button>
  </div>
</template>
<script>
import AnimatedNumber from './AnimatedNumber.vue';

export default {
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      value: 399,
      duration: 1000,
      i: 0,
    };
  },
  methods: {
    formatToPrice(value) {
      return `$ ${value.toFixed(2)}`;
    },
    increase() {
      this.value = Number(this.value) + 500;
    },
    decrease() {
      this.value = Number(this.value) - 500;
    },
    begin(anim) {
      console.log(anim.progress);
    },
    complete(anim) {
      console.log(anim);
    },
    update(anim) {
      console.log(anim);
    },
    run(anim) {
      console.log(anim);
    },
  },
};
</script>

<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

span {
  font-size: 50px;
}

button {
  border: none;
  margin-left: 20px;
  padding: 10px;
  border-radius: 100px;
}
button:focus {
  outline: none;
}
</style>
