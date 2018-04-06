# animated-number-vue
>A simple vue animated number for Vue2, using [anime](https://github.com/juliangarnier/anime). 

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

## Props
Follwing `props` are used while initialization
> Note : Only `value` is a required prop. Others are optional

| Prop Name | Type | Description |
|----------|------|--------------|
| value `(required)`| [ Number, String] | number that will be animated |
| formatValue `(optional)`| Function | a function that will manipulate the animated value |
| duration `(optional)`| Number | the duration of animation |

---