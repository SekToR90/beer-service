<template>
  <md-field>
    <label :htmlFor="name">{{ name }}</label>
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
