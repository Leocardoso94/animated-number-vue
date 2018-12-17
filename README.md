# animated-number-vue

![npm](https://img.shields.io/npm/dt/animated-number-vue.svg) [![Build Status](https://travis-ci.org/Leocardoso94/animated-number-vue.svg?branch=master)](https://travis-ci.org/Leocardoso94/animated-number-vue) [![](https://data.jsdelivr.com/v1/package/npm/animated-number-vue/badge)](https://www.jsdelivr.com/package/npm/animated-number-vue)

> A simple vue animated number for Vue2, using [anime](https://github.com/juliangarnier/anime).

> Live demo [here](https://codesandbox.io/s/v68x95mo30)

![](https://media.giphy.com/media/iMQAMgUSFrh7X2xBCZ/giphy.gif)

## Usage

```bash
$ npm install animated-number-vue
# OR
$ yarn add animated-number-vue
```

```vue
<template>
  <animated-number
    :value="value"
    :formatValue="formatToPrice"
    :duration="300"
  />
</template>
<script>
import AnimatedNumber from "animated-number-vue";

export default {
  components: {
    AnimatedNumber
  },
  data() {
    return {
      value: 1000
    };
  },
  methods: {
    formatToPrice(value) {
      return `R$ ${value.toFixed(2)}`;
    }
  }
};
</script>
```

[View demo here](https://codesandbox.io/s/v68x95mo30)
[![Edit animated-number-vue](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v68x95mo30)

## Props

Following `props` are used while initialization

> Note : Only `value` is a required prop. Others are optional

| Prop Name             | Type              | Description                                                                                    |
| --------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| value `(required)`    | [ Number, String] | number that will be animated                                                                   |
| duration `(optional)` | Number            | the duration of animation                                                                      |
| round `(optional)`    | Number            | remove decimals by rounding the value                                                          |
| delay `(optional)`    | Number            | the delay of animation                                                                         |
| easing `(optional)`   | String            | you can found all valid values [here](https://github.com/juliangarnier/anime#easing-functions) |

#### Callbacks props

Execute a function at the beginning, during or when an animation or timeline is completed.

| Names       | Types    | Arguments          | Info                                               |
| ----------- | -------- | ------------------ | -------------------------------------------------- |
| formatValue | Function | value `Number`     | A function that will manipulate the animated value |
| update      | Function | animation `Object` | Called at time = 0                                 |
| run         | Function | animation `Object` | Called after delay is finished                     |
| begin       | Function | animation `Object` | Called after animation delay is over               |
| complete    | Function | animation `Object` | Called only after all the loops are completed      |

### Format Value

`formatValue()` is used to format the animatedValue.

### Update

`update()` is called on every frame while the instance is playing.

### Begin

`begin()` is called once after the delay is finished.

Check if the animation has begun with `myAnimation.began`, return `true` or `false`.

### Run

`run()` is called every frame after the delay is finished.

### Complete

`complete()` is called once after the animation is finished.
