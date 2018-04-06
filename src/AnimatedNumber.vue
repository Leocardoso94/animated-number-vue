<template>
  <span>{{formatValue(animatedValue)}}</span>
</template>
<script>
import anime from 'animejs';

export default {
  props: {
    value: [Number, String],
    formatValue: {
      type: Function,
      default: value => value,
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      animatedValue: 0,
    };
  },
  mounted() {
    this.animateValue(this.value);
  },
  watch: {
    value(value) {
      this.animateValue(value);
    },
  },
  methods: {
    animateValue(value) {
      anime({
        targets: this,
        animatedValue: value,
        duration: this.duration,
      });
    },
  },
};
</script>
