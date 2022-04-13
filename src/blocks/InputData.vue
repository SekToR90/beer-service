<template>
  <md-field>
    <label :for="`${id}_input`">{{ name }}
      <!-- eslint-disable-next-line vue/no-mutating-props -->
      <input type="text" :id="`${id}_input`" v-model="data" readonly />
    </label>
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
