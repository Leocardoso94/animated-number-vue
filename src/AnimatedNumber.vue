<template>
  <span>{{formatValue(animatedValue)}}</span>
</template>
<script>
import anime from 'animejs';

export default {
  props: {
    value: {
      type: [Number, String],
      required: true,
    },
    formatValue: {
      type: Function,
      default: value => value,
    },
    easing: {
      type: String,
      default: 'linear',
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
        easing: this.easing,
      });
    },
  },
};
</script>
