<template>
  <md-field>
    <label :for="`${id}_input`">{{ name }}</label>
    <md-input
      type="text"
      :id="`${id}_input`"
      v-model="data"
      readonly
    ></md-input>
  </md-field>
</template>

<script>
export default {
  name: 'InputData',
  props: {
    name: String,
    data: [String, Number],
    id: String,
  },
};
</script>
