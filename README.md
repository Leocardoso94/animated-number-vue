# animated-number-vue 

![npm](https://img.shields.io/npm/dt/animated-number-vue.svg) [![Build Status](https://travis-ci.org/Leocardoso94/animated-number-vue.svg?branch=master)](https://travis-ci.org/Leocardoso94/animated-number-vue)  [![](https://data.jsdelivr.com/v1/package/npm/animated-number-vue/badge)](https://www.jsdelivr.com/package/npm/animated-number-vue) ![](http://img.badgesize.io/leocardoso94/animated-number-vue/master/dist/AnimatedNumber.umd.min.js)

>A simple vue animated number for Vue2, using [anime](https://github.com/juliangarnier/anime). 

>Live demo [here](https://codesandbox.io/s/v68x95mo30)

![](https://media.giphy.com/media/3Fnc5buwtaxS1n0J3L/giphy.gif)

## Usage

```bash
$ npm install animated-number-vue
# OR
$ yarn add animated-number-vue
```

````vue
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
      return `R$ ${Number(value).toFixed(2)}`;
    }
  }
};
</script>
````
[View demo here](https://codesandbox.io/s/v68x95mo30)
[![Edit animated-number-vue](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v68x95mo30)


## Props
Follwing `props` are used while initialization
> Note : Only `value` is a required prop. Others are optional

| Prop Name | Type | Description |
|----------|------|--------------|
| value `(required)`| [ Number, String] | number that will be animated |
| formatValue `(optional)`| Function | a function that will manipulate the animated value |
| duration `(optional)`| Number | the duration of animation |

---