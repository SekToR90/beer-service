<template>
  <md-field>
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <label for="name">{{ name }}</label>
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <md-input type="text" :id="name" v-model="data" readonly></md-input>
  </md-field>
</template>

<script>
export default {
  name: 'InputData',
  props: {
    name: String,
    data: [String, Number],
  },
};
</script>
